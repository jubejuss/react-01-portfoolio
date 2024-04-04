import * as stylex from '@stylexjs/stylex';

const buttonStyles = stylex.create({
    base: { 
        padding: '0.5rem 1rem',
        borderRadius: '0.5rem',
        border: '2px solid transparent',
        cursor: 'pointer',
        fontSize: '1rem',
        transition: 'transform 0.1s', // Lisab sujuva ülemineku hover efekti jaoks
        transformOrigin: 'center', // Tagab, et muutus toimub tsentri suunas, kuigi seda pole vaja siin
        ':hover': {
                transform: 'scale(1.05)',
            },
        ':active': {
            transform: 'scale(0.95)',
        }
     },
    primary: { 
        borderColor: '#110147',
        backgroundColor: 'blue',
        color: 'white',
        ':hover': {
                backgroundColor: '#0909b3',
            },
        ':active': {
             backgroundColor: '#06068e',
        }
    },
    secondary: { 
        borderColor: 'darkblue',
        backgroundColor: 'transparent',
    },
    small: {
        padding: '0.25rem 0.5rem',
        fontSize: '0.8rem',
    },
    medium: {
        padding: '0.5rem 1rem',
        fontSize: '1rem',
    },
    large: {
        padding: '0.75rem 1.5rem',
        fontSize: '1.2rem',
    },
    xl: {
        padding: '1rem 2rem',
        fontSize: '1.5rem',
    }
});

function Button({ type, size, children }) {
  const buttonTypeStyles = buttonStyles[type] || buttonStyles.base;
  const buttonSizeStyles = buttonStyles[size] || {};

  return (
    <button {...stylex.props(buttonStyles.base, buttonTypeStyles, buttonSizeStyles)}>
      {children}
    </button>
  );
}

export default Button;
