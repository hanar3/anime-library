import { InputHTMLAttributes, ReactNode, useCallback, useRef, useState } from 'react'

import { Container } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  icon?: ReactNode;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const ref = useRef<HTMLInputElement>(null!);

  const handleFocus = useCallback(() => {
    setIsFocused(true);

  }, [])
  
  const handleBlur = useCallback(() => {
    setIsFocused(false);
    if (ref.current.value) {
      setIsFilled(true);
    }
  }, [])

  return (
    <Container isFilled={isFilled} isFocused={isFocused}>
      {Icon && Icon}
      <input {...rest} onFocus={handleFocus} onBlur={handleBlur} ref={ref} />
    </Container>
  )
}

export default Input;