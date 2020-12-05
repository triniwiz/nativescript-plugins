# NativeScript Accordion

## Install
`ns plugin add nativescript-accordion`

## Usage

IMPORTANT: Make sure you include xmlns:accordion="@triniwiz/nativescript-accordion" on the Page element

### Data 

By default the plugin will look for the `items` property in each item but you can set name by setting
`childItems="blah"` on the `Accordion` instance

```
this.items = [
      {
        title: "1", footer: "10", headerText: "First", footerText: "4",
        blah: [
          { image: "~/images/a9ff17db85f8136619feb0d5a200c0e4.png", text: "Stop" },
          { text: "Drop", image: "http://static.srcdn.com/wp-content/uploads/Superman-fighting-Goku.jpg" }
        ]
      }
    ]
```

```ts
selectedIndexes = [0,3]

```

## Core

```xml
<accordion:Accordion items="{{items}}" itemHeaderTap="tapped" itemContentTap="childTapped"  allowMultiple="true" id="ac" selectedIndexes="selectedIndexes">
            <accordion:Accordion.headerTemplate>
                <GridLayout backgroundColor="green" columns="auto,*">
                    <Label text="{{title}}"/>
                    <Label col="1" text="+"/>
                </GridLayout>
            </accordion:Accordion.headerTemplate>

            <accordion:Accordion.itemHeaderTemplate>
                <StackLayout>
                    <Label text="{{text}}"/>
                </StackLayout>
            </accordion:Accordion.itemHeaderTemplate>
            
            
            <accordion:Accordion.itemContentTemplate>
                            <StackLayout>
                                <Image src="{{image}}"/>
                            </StackLayout>
              </accordion:Accordion.itemContentTemplate>

            <accordion:Accordion.footerTemplate>
                <GridLayout backgroundColor="yellow" columns="auto,*">
                    <Label text="{{footer}}"/>
                    <Label col="1" text="-"/>
                </GridLayout>
            </accordion:Accordion.footerTemplate>

        </accordion:Accordion>
```

### Multi Template

```xml
<accordion:Accordion childItems="children" id="accordion" selectedIndexesChange="onChange" height="100%"
                             items="{{items}}" allowMultiple="true" selectedIndexes="{{selectedIndexes}}"
                             headerTemplateSelector="$index % 2 !== 0 ? 'odd' : 'even'"
                             itemHeaderTemplateSelector="$index % 2 !== 0  ? 'odd' : 'even'"
                             itemContentTemplateSelector="$childIndex % 2 !== 0  ? 'odd' : 'even'"
                             footerTemplateSelector="$index % 2 !== 0 ? 'odd' : 'even'"
        >

            <Accordion.headerTemplates>
                <template key="odd">
                    <StackLayout>
                        <Label backgroundColor="green" text="{{headerText}}"/>
                    </StackLayout>
                </template>

                <template key="even">
                    <StackLayout>
                        <Label backgroundColor="orange" text="{{headerText}}"/>
                    </StackLayout>
                </template>
            </Accordion.headerTemplates>


            <Accordion.itemHeaderTemplates>
                <template key="odd">
                    <StackLayout backgroundColor="white">
                        <Label text="{{title}}"/>
                    </StackLayout>
                </template>

                <template key="even">
                    <StackLayout backgroundColor="white">
                        <Label text="{{title}}"/>
                        <Image decodeWidth="400" decodeHeight="400" loadMode="async" src="{{image}}"/>
                    </StackLayout>
                </template>
            </Accordion.itemHeaderTemplates>

            <Accordion.itemContentTemplates>
                <template key="odd">
                    <StackLayout>
                        <Image decodeWidth="400" decodeHeight="400" loadMode="async" src="{{image}}"/>
                        <Label text="{{text}}"/>
                    </StackLayout>
                </template>

                <template key="even">
                    <StackLayout>
                        <Image decodeWidth="400" decodeHeight="400" loadMode="async" src="{{image}}"/>
                        <Label text="{{text}}"/>
                    </StackLayout>
                </template>
            </Accordion.itemContentTemplates>

            <Accordion.footerTemplates>
                <template key="odd">
                    <StackLayout>
                        <Label backgroundColor="yellow" text="{{footerText}}"/>
                    </StackLayout>
                </template>

                <template key="even">
                    <StackLayout>
                        <Label backgroundColor="blue" text="{{footerText}}"/>
                    </StackLayout>
                </template>
            </Accordion.footerTemplates>

        </accordion:Accordion>

```

## Vue

```js

import Vue from 'nativescript-vue'
import Pager from 'nativescript-accordion/vue'

Vue.use(Pager)
```

```html
<Accordion row="1" for="item of items">

				<v-template name="header">
					<StackLayout>
						<Label backgroundColor="green" :text="item.headerText"></Label>
					</StackLayout>
				</v-template>


				<v-template name="title">
					<GridLayout backgroundColor="white">
						<Label height="100%" :text="item.title"></Label>
					</GridLayout>
				</v-template>

				<v-template name="content">
					<StackLayout>
						<Image decodeWidth="400" decodeHeight="400" loadMode="async" :src="item.image"></Image>
						<Label :text="item.text"></Label>
					</StackLayout>
				</v-template>


				<v-template name="footer">
					<StackLayout>
						<Label backgroundColor="yellow" :text="item.footerText"></Label>
					</StackLayout>
				</v-template>
			</Accordion>
```

### Multi Template

```html
<Accordion row="2" height="100%" ref="accordion" allowMultiple="true" childItems="children" for="item of items">
				<v-template if="$odd" name="header-odd">
					<StackLayout>
						<Label backgroundColor="green" :text="item.headerText"></Label>
					</StackLayout>
				</v-template>

				<v-template if="$even" name="header-even">
					<StackLayout>
						<Label backgroundColor="orange" :text="item.headerText"></Label>
					</StackLayout>
				</v-template>

				<v-template if="$odd" name="title-odd">
					<StackLayout backgroundColor="white">
						<Label :text="item.title"></Label>
					</StackLayout>
				</v-template>

				<v-template if="$even" name="title-even">
					<StackLayout backgroundColor="white">
						<Label :text="item.title"></Label>
						<Image height="100" width="100" decodeWidth="400" decodeHeight="400" loadMode="async"
							   :src="item.image"></Image>
					</StackLayout>
				</v-template>


				<v-template if="$odd" name="content-odd">
					<StackLayout>
						<Image decodeWidth="400" decodeHeight="400" loadMode="async" :src="item.image"></Image>
						<Label :text="item.text"></Label>
					</StackLayout>
				</v-template>

				<v-template if="$even" name="content-even">
					<StackLayout>
						<Image decodeWidth="400" decodeHeight="400" loadMode="async" :src="item.image"></Image>
						<Label :text="item.text"></Label>
					</StackLayout>
				</v-template>

				<v-template if="$odd" name="footer-odd">
					<StackLayout>
						<Label backgroundColor="yellow" :text="item.footerText"></Label>
					</StackLayout>
				</v-template>

				<v-template if="$even" name="footer-even">
					<StackLayout>
						<Label backgroundColor="blue" :text="item.footerText"></Label>
					</StackLayout>
				</v-template>
			</Accordion>

```


## Angular

```js
import { AccordionModule } from "nativescript-accordion/angular";

@NgModule({
    imports: [
        AccordionModule
    ]
    })
```

```html
<Accordion height="100%" [items]="items" allowMultiple="false" [selectedIndexes]="selectedIndexes">

		<ng-template let-i="index" let-item="item" acTemplateKey="header">
			<StackLayout>
				<Label backgroundColor="green" [text]="item.headerText"></Label>
			</StackLayout>
		</ng-template>


		<ng-template let-i="index" let-item="item" acTemplateKey="title">
			<GridLayout backgroundColor="white">
				<Label height="100%" [text]="item.title"></Label>
			</GridLayout>
		</ng-template>

		<ng-template let-i="index" let-item="item" acTemplateKey="content">
			<StackLayout>
				<Image width="300" height="300" decodeWidth="400" decodeHeight="400" [src]="item.image"></Image>
				<Label [text]="item.text"></Label>
			</StackLayout>
		</ng-template>


		<ng-template let-i="index" let-item="item" acTemplateKey="footer">
			<StackLayout>
				<Label backgroundColor="yellow" [text]="item.footerText"></Label>
			</StackLayout>
		</ng-template>
	</Accordion>
```

## Multi Template

```html
<Accordion #accordion row="2" height="100%" allowMultiple="true" childItems="children" [items]="items"
			   [headerTemplateSelector]="headerTemplateSelector"
			   [itemHeaderTemplateSelector]="itemHeaderTemplateSelector"
			   [itemContentTemplateSelector]="itemContentTemplateSelector"
			   [footerTemplateSelector]="footerTemplateSelector"
	>
		<ng-template let-i="index" let-item="item" acTemplateKey="header-odd">
			<StackLayout>
				<Label backgroundColor="green" [text]="item.headerText"></Label>
			</StackLayout>
		</ng-template>

		<ng-template let-i="index" let-item="item" acTemplateKey="header-even">
			<StackLayout>
				<Label backgroundColor="orange" [text]="item.headerText"></Label>
			</StackLayout>
		</ng-template>

		<ng-template let-i="index" let-item="item" acTemplateKey="title-odd">
			<StackLayout backgroundColor="white">
				<Label [text]="item.title"></Label>
			</StackLayout>
		</ng-template>

		<ng-template let-i="index" let-item="item" acTemplateKey="title-even">
			<StackLayout backgroundColor="white">
				<Label [text]="item.title"></Label>
				<Image height="100" width="100" decodeWidth="400" decodeHeight="400" loadMode="async"
					   [src]="item.image"></Image>
			</StackLayout>
		</ng-template>


		<ng-template let-i="index" let-item="item" acTemplateKey="content-odd">
			<StackLayout>
				<Image decodeWidth="400" decodeHeight="400" loadMode="async" [src]="item.image"></Image>
				<Label [text]="item.text"></Label>
			</StackLayout>
		</ng-template>

		<ng-template let-i="index" let-item="item" acTemplateKey="content-even">
			<StackLayout>
				<Image decodeWidth="400" decodeHeight="400" loadMode="async" [src]="item.image"></Image>
				<Label [text]="item.text"></Label>
			</StackLayout>
		</ng-template>

		<ng-template let-i="index" let-item="item" acTemplateKey="footer-odd">
			<StackLayout>
				<Label backgroundColor="yellow" [text]="item.footerText"></Label>
			</StackLayout>
		</ng-template>

		<ng-template let-i="index" let-item="item" acTemplateKey="footer-even">
			<StackLayout>
				<Label backgroundColor="blue" [text]="item.footerText"></Label>
			</StackLayout>
		</ng-template>
	</Accordion>
```

## Config
```ts
public selectedIndexes = [0,3]
```
```
<Accordion allowMultiple="true" [selectedIndexes]="selectedIndexes">
```
