import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
	title: string;
	description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
	{
		title: "Easy to Use",
		description: (
			<>
				Dnrs lets you easily manage the configuration of your own dns with an
				easy-to-use configuration language.
			</>
		),
	},
	{
		title: "Lightweight",
		description: (
			<>Dnrs is light, if you want a light and efficient approach.</>
		),
	},
	{
		title: "Written in rust",
		description: (
			<>
				Dnrs has been written in rust for maximum performance, safety,
				efficiency and lightness.
			</>
		),
	},
];

function Feature({ title, description }: FeatureItem) {
	return (
		<div className={clsx("col col--4")}>
			<div className="text--center padding-horiz--md">
				<Heading as="h3">{title}</Heading>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures(): JSX.Element {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
