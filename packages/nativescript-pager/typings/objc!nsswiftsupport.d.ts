declare class PagerUtils extends NSObject {

	static alloc(): PagerUtils; // inherited from NSObject

	static new(): PagerUtils; // inherited from NSObject

	static updateCollection(update: NSDictionary<string, any>, collection: UICollectionView): void;
}

declare class UICollectionViewFlowLinearLayoutImpl extends UICollectionViewFlowLayout {

	static alloc(): UICollectionViewFlowLinearLayoutImpl; // inherited from NSObject

	static new(): UICollectionViewFlowLinearLayoutImpl; // inherited from NSObject

	numberOfItemsPerPage: number;

	onPageChange: (p1: number) => void;

	transformer: string;

	velocityThresholdPerPage: number;
	
	selectedIndex: number;
}
