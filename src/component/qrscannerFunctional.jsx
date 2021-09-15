import React , {useEffect , useState} from 'react'
import QrReader from 'react-qr-reader'
import styles from './qrscanner.module.css'


const QR = ( ) => {
  const [address,  setAddress] = useState('اسکن انجام نشده است!');
  const [scanned , setScanned] = useState(true);

  const handleScan = data => {
     console.log('data: ',data);
     console.log('scanned: ',scanned)
     if (data) {
       setAddress(data);
       setScanned(true)
     }
   }

  const handleError = err => {
    console.error(err)
    console.log('scannedrro: ', scanned)
   }

  return (
    <div className = {styles.mainContainer}>
      <div className = {`${!scanned ? styles.showscanner : styles.hiddescanner}`}>
        <QrReader
          delay={300}
          onError={(e) => handleError(e)}
          onScan={(e) => handleScan(e)}
          className = {styles.qr}
        />
        <span className = {styles.tag}>
          اسکن خود را شروع کنید
        </span>
      </div>
      <div className = {`${scanned ? styles.showresult : styles.hidderesult}`}>
        <p className = {styles.address}>{address}</p>
        <div className = {styles.buttonContainer}>
          <a className = {styles.button} onClick = {() => setScanned(false) }>
            اسکن 
          </a>
          <a className = {styles.button} href = {address}>
            ورود به لینک اسکن شده
          </a>
        </div>
      </div>
    </div>
  )
}

export default QR