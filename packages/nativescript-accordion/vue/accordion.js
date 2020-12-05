module.exports = function accordion(Vue) {
	return {
		model: {
			prop: 'selectedIndexes',
			event: 'selectedIndexesChange'
		},
		props: {
			items: {
				type: Array,
				required: true
			},
			'+alias': {
				type: String,
				default: 'item'
			},
			'+index': {
				type: String,
				default: '$index'
			},
			selectedIndexes: {
				type: Array,
				default: function () {
					return []
				}
			}
		},
		template: `
    <NativeAccordion
      ref="accordion"
      :items="items"
      v-bind="$attrs"
      v-on="listeners"
      :selectedIndexes="selectedIndexes"
      @headerLoading="onHeaderLoading"
      @footerLoading="onFooterLoading"
      @itemHeaderLoading="onItemHeaderLoading"
      @itemContentLoading="onItemContentLoading">
      <slot />
    </NativeAccordion>
  `,
		watch: {
			items: {
				handler(newVal) {
					this.$refs.accordion.setAttribute('items', newVal);
					this.$refs.accordion.nativeView.refresh();
				},
				deep: true
			}
		},
		computed: {
			listeners() {
				return Object.assign({}, this.$listeners, {
					selectedIndexesChange: this.onSelectedIndexesChange
				})
			}
		},
		mounted() {
			this.getItemContext = (item, index) =>
				getItemContext(item, index, this.$props[ '+alias' ], this.$props[ '+index' ]);

			this.getChildItemContext = (item, parentIndex, index) =>
				getChildItemContext(item, parentIndex, index, this.$props[ '+alias' ], this.$props[ '+index' ]);

			this.selectorFn = (item, type) => selectorFn(this.$templates, item, type);

			this.$refs.accordion.setAttribute('items', this.items);

			const headerTemplates = this.$templates.getKeyedTemplates().filter(item => {
				if (item.key === 'header') {
					return item;
				}
				if (item.key.startsWith('header-')) {
					return item;
				}
			});

			if (headerTemplates.length > 0) {
				this.$refs.accordion.setAttribute('_getHasHeader', () => {
					return false;
				});
			}
			const itemContentTemplates = this.$templates.getKeyedTemplates().filter(item => {
				if (item.key === 'content') {
					return item;
				}

				if (item.key.startsWith('content-')) {
					return item;
				}
			});

			const itemHeaderTemplates = this.$templates.getKeyedTemplates().filter(item => {
				if (item.key === 'title') {
					return item;
				}
				if (item.key.startsWith('title-')) {
					return item;
				}
			});

			const footerTemplates = this.$templates.getKeyedTemplates().filter(item => {
				if (item.key === 'footer') {
					return item;
				}

				if (item.key.startsWith('footer-')) {
					return item;
				}
			});

			if (footerTemplates.length > 0) {
				this.$refs.accordion.setAttribute('_getHasFooter', () => {
					return false;
				});
			}


			this.$refs.accordion.setAttribute(
				'_headerTemplatesInternal',
				headerTemplates
			);

			this.$refs.accordion.setAttribute(
				'_headerTemplateSelector',
				(item, index) => {
					return this.selectorFn(this.getItemContext(item, index), 'header');
				}
			);

			this.$refs.accordion.setAttribute(
				'_itemHeaderTemplatesInternal',
				itemHeaderTemplates
			);


			this.$refs.accordion.setAttribute(
				'_itemHeaderTemplateSelector',
				(item, index) => {
					return this.selectorFn(this.getItemContext(item, index), 'title');
				}
			);

			this.$refs.accordion.setAttribute(
				'_itemContentTemplatesInternal',
				itemContentTemplates
			);
			this.$refs.accordion.setAttribute(
				'_itemContentTemplateSelector',
				(item, parentIndex, index) => {
					return this.selectorFn(this.getChildItemContext(item, parentIndex, index), 'content');
				}
			);

			this.$refs.accordion.setAttribute(
				'_footerTemplatesInternal',
				footerTemplates
			);
			this.$refs.accordion.setAttribute(
				'_footerTemplateSelector',
				(item, index) => {
					return this.selectorFn(this.getItemContext(item, index), 'footer');
				}
			);

		},
		methods: {
			onHeaderLoading(args) {
				const index = args.index;
				const items = args.object.items;
				let currentItem =
					typeof items.getItem === 'function'
						? items.getItem(index)
						: items[ index ];

				let name = args.object._headerTemplateSelector(currentItem, index, items);

				if (name === 'default') {
					name = 'header'
				}

				const context = this.getItemContext(currentItem, index);
				const oldVnode = args.view && args.view[ Vue.VUE_VIEW ];
				args.view = this.$templates.patchTemplate(name, context, oldVnode);
			},
			onFooterLoading(args) {
				const index = args.index;
				const items = args.object.items;
				let currentItem =
					typeof items.getItem === 'function'
						? items.getItem(index)
						: items[ index ];

				let name = args.object._footerTemplateSelector(currentItem, index, items);

				if (name === 'default') {
					name = 'footer'
				}


				const context = this.getItemContext(currentItem, index);
				const oldVnode = args.view && args.view[ Vue.VUE_VIEW ];
				args.view = this.$templates.patchTemplate(name, context, oldVnode);
			},
			onItemHeaderLoading(args) {
				const index = args.index;
				const items = args.object.items;
				let currentItem =
					typeof items.getItem === 'function'
						? items.getItem(index)
						: items[ index ];

				let name = args.object._itemHeaderTemplateSelector(currentItem, index, items);

				if (name === 'default') {
					name = 'title'
				}

				const context = this.getItemContext(currentItem, index);
				const oldVnode = args.view && args.view[ Vue.VUE_VIEW ];

				args.view = this.$templates.patchTemplate(name, context, oldVnode);
			},
			onItemContentLoading(args) {
				const index = args.index;
				const childIndex = args.childIndex;
				const items = args.object.items;
				const childItems = this.$refs.accordion.getAttribute('childItems');
				let currentItem =
					typeof items.getItem === 'function'
						? items.getItem(index)[ childItems ][ childIndex ]
						: items[ index ][ childItems ][ childIndex ];


				let name = args.object._itemContentTemplateSelector(currentItem, index, items);

				if (name === 'default') {
					name = 'content'
				}

				const context = this.getChildItemContext(currentItem, index, childIndex);
				const oldVnode = args.view && args.view[ Vue.VUE_VIEW ];
				args.view = this.$templates.patchTemplate(name, context, oldVnode);
			},
			onSelectedIndexesChange({ value }) {
				this.$emit('selectedIndexesChange', value)
			}
		}
	};

	function getItemContext(item, index, alias, index_alias) {
		return {
			[ alias ]: item,
			[ index_alias ]: index,
			$even: index % 2 === 0,
			$odd: index % 2 !== 0
		};
	}

	function getChildItemContext(item, parentIndex, index, alias, index_alias) {
		return {
			[ alias ]: item,
			[ index_alias ]: index,
			$even: index % 2 === 0,
			$odd: index % 2 !== 0,
			$parentIndex: parentIndex
		};
	}

	function selectorFn(templates, item, type) {
		const templateMap = templates._templateMap;
		let iterator = templateMap.entries();
		let curr;
		while ((curr = iterator.next().value)) {
			let name = curr[ 0 ];
			let conditionFn = curr[ 1 ].conditionFn;
			try {
				if (conditionFn(item) && (name === type || name.startsWith(`${type}-`))) {
					return name
				}
			} catch (err) {
			}
		}
		return 'default'
	}
}