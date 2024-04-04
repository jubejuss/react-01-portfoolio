import Button from './Button';
import * as stylex from '@stylexjs/stylex';

// Defineeri StyleX stiilid
const cardStyles = stylex.create({
  card: {
    // Siia võid lisada kaardi baasstiile, näiteks:
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '0.25rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  },
  buttonContainer: {
    display: 'flex',
    gap: '1rem',
    // Siia võid lisada veel flex konteineri seadeid
  }
  // Siia võid lisada ka teisi stiile
});

function Card({ imageSrc, altText, title, description, primaryButtonText, secondaryButtonText }) {
  return (
    <div {...stylex.props(cardStyles.card)}>
      <img src={imageSrc} alt={altText} />
      <h2>{title}</h2>
      <p>{description}</p>
      <div {...stylex.props(cardStyles.buttonContainer)}>
        <Button type="primary" size="large">{primaryButtonText}</Button>
        <Button type="secondary" size="large">{secondaryButtonText}</Button>
      </div>
    </div>
  );
}

export default Card;
