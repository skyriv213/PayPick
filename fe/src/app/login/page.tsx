import * as styles from './page.css'
import useLoginLogic from '@/hooks/useLoginLogic';
import { useState } from 'react';


const Login = () => {

  const url = `http://localhost:8080/login`;
  const [password, setPassword] = useState('');

  // const {  onClick } = useLoginLogic({
  //   password,
  //   url,
  // });


  return (
    <div className={styles.container}>
      <div className={styles.info}>
        
        <div>
          <input type="password" name="password" value={password}/>
        </div>
        <h1 >login</h1>
      </div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Login;
