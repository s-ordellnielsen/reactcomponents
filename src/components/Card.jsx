/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import FeatherIcon from 'feather-icons-react';
import useFetch from '../hooks/useFetch';
import cat from '../styling/cat';

const Card = ({ card }) => {
	// const style = useFetch(`http://localhost:8000/style`);
	const text = card.text;
	const styles = {
		card: css`
			background: #ffffff;
			grid-area: card-${card.id};
			border-radius: 1.5rem;
			box-shadow: 0 0.5rem 3rem -1rem #15151505;
			overflow: hidden;
		`,
	};

	let style = null;

	switch (card.type) {
		case 'cat':
			style = cat(card);
	}

	return (
		<section css={styles.card}>
			{/* {card.images && <img src={card.images[0]} />} */}
			{/* {text.tag && <span>{text.tag}</span>}
			{text.header && <h2>{text.header}</h2>}
			{text.body && <p>{text.body}</p>} */}
		</section>
	);
};

export default Card;