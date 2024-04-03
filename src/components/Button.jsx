import * as stylex from '@stylexjs/stylex';

const buttonStyles = stylex.create({
  base: { 
    padding: '0.5rem 1rem',
    borderRadius: '0.25rem',
    border: '2px solid transparent',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
   },
  primary: { 
    border: 'darkblue',
    backgroundColor: 'blue',
    color: 'white',
    ':hover': {
        backgroundColor: '#0909b3',
      },
   },
  secondary: { 
    border: 'darkblue'
   },
});

function Button({ type, children }) {
  const buttonTypeStyles = buttonStyles[type] || buttonStyles.base;

  return (
    <button {...stylex.props(buttonStyles.base, buttonTypeStyles)}>
      {children}
    </button>
  );
}

export default Button;