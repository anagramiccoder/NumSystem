
import './App.css';
import MediaQuery from 'react-responsive';
import { useEffect, useState } from 'react';
function App() {
  const [Last, setLast] = useState("");
  useEffect(()=>{
    setLast('bin');
  },[]);
  let binary=document.getElementById('bin');
  let octal=document.getElementById('oct');
  let decimal=document.getElementById('dec');
  let hexa=document.getElementById('hex');
  function convBin(){
    let num=parseInt(binary.value,2);
      if(isNaN(num)){
        num=0;
      }
    octal.value=num.toString(8);
    decimal.value=num.toString(10);
    hexa.value=num.toString(16);
  }
  function convOct(){
    let num=parseInt(octal.value,8);
      if(isNaN(num)){
        num=0;
      }
    binary.value=num.toString(2);
    decimal.value=num.toString(10);
    hexa.value=num.toString(16);
  }
  function convDec(){
    let num=parseInt(decimal.value,10);
      if(isNaN(num)){
        num=0;
      }
    octal.value=num.toString(8);
    binary.value=num.toString(2);
    hexa.value=num.toString(16);
  }
  function convHex(){
    let num=parseInt(hexa.value,16);
      if(isNaN(num)){
        num=0;
      }
    octal.value=num.toString(8);
    decimal.value=num.toString(10);
    binary.value=num.toString(2);
  }
  
  return (
    <>
    <div className="App">
      <div className='section'>
          <div><h1>What is IT?</h1></div>
          <p>Information technology (IT) is the 
            creation, processing, storage, secure 
            transmission, and exchange of all forms of electronic data. IT includes the use of computers, networking, storage, and other physical devices. Telecommunications and computer technology are both included in the business usage of IT. It involves using computers or other electronic devices to access information. Information technology underpins so many aspects of our everyday lives, including our workforce, company processes, and personal access to information. IT has a significant impact on all aspects of our daily life, including information storage, retrieval, access, and manipulation.</p>
      </div>

      <div className='rev section'>
          <p>-	A system of writing numbers is referred to as a number system. It is the mathematical notation for consistently employing digits or other symbols to represent the numbers in a particular set. It represents the arithmetic and algebraic structure of the numbers and gives each number a distinct representation. We can perform mathematical operations like addition, subtraction, multiplication, and division with it as well. Any digit in a number can be determined by, the number, the position of the number, and the base of the number.</p>
          <div ><h1>What is Number system?</h1></div>
      </div>
      <center><h1>The Number Systems</h1></center>
      
      <div className='section'>
          <div><h1>1.	Binary Number System or the base 2</h1></div>
          <p>Information technology (IT) is the 
            creation, processing, storage, secure 
            transmission, and exchange of all forms of electronic data. IT includes the use of computers, networking, storage, and other physical devices. Telecommunications and computer technology are both included in the business usage of IT. It involves using computers or other electronic devices to access information. Information technology underpins so many aspects of our everyday lives, including our workforce, company processes, and personal access to information. IT has a significant impact on all aspects of our daily life, including information storage, retrieval, access, and manipulation.</p>
      </div>
      <div className='section'>
          <div><h1>2.	Octa Number system or the base 8 number system</h1></div>
          <p>Information technology (IT) is the 
            creation, processing, storage, secure 
            transmission, and exchange of all forms of electronic data. IT includes the use of computers, networking, storage, and other physical devices. Telecommunications and computer technology are both included in the business usage of IT. It involves using computers or other electronic devices to access information. Information technology underpins so many aspects of our everyday lives, including our workforce, company processes, and personal access to information. IT has a significant impact on all aspects of our daily life, including information storage, retrieval, access, and manipulation.</p>
      </div>
      <div className='section'>
          <div><h1>3.	Decimal Number System or Base 10 system</h1></div>
          <p>Information technology (IT) is the 
            creation, processing, storage, secure 
            transmission, and exchange of all forms of electronic data. IT includes the use of computers, networking, storage, and other physical devices. Telecommunications and computer technology are both included in the business usage of IT. It involves using computers or other electronic devices to access information. Information technology underpins so many aspects of our everyday lives, including our workforce, company processes, and personal access to information. IT has a significant impact on all aspects of our daily life, including information storage, retrieval, access, and manipulation.</p>
      </div>
      <div className='section'>
          <div><h1>4.	Hexadecimal Number System </h1></div>
         <p>-	It is also called the Hindu–Arabic numeral system. The most widely used number system is the decimal one, which uses the ten numbers 0, 1, 2, 3, 4, 5, 6, 7, and 9. All additional numbers are created using this set of ten digits. A number's position in the number determines a digit's value.</p>
      </div>
      <center><h1>Summary</h1></center>
      <div className='tables'>
      <MediaQuery minWidth={701}>
        <center>
        <table>
          <tr><th>Binary</th><td>0</td><td>1</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
          <tr><th>Octal</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
          <tr><th>Decimal</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td></td><td></td><td></td><td></td><td></td></tr>
          <tr><th>HexaDecimal</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td></tr>
        </table>
        </center>
      </MediaQuery>
      <MediaQuery maxWidth={700}>
        <center>
          <table>
            <tr><th>Binary</th><th>Octal</th><th>Decimal</th><th>HexaDecimal</th></tr>
            <tr><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>1</td><td>1</td><td>1</td><td>1</td></tr>
            <tr><td></td><td>2</td><td>2</td><td>2</td></tr>
            <tr><td></td><td>3</td><td>3</td><td>3</td></tr>
            <tr><td></td><td>4</td><td>4</td><td>4</td></tr>
            <tr><td></td><td>5</td><td>5</td><td>5</td></tr>
            <tr><td></td><td>6</td><td>6</td><td>6</td></tr>
            <tr><td></td><td>7</td><td>7</td><td>7</td></tr>
            <tr><td></td><td></td><td>8</td><td>8</td></tr>
            <tr><td></td><td></td><td>9</td><td>9</td></tr>
            <tr><td></td><td></td><td></td><td>A</td></tr>
            <tr><td></td><td></td><td></td><td>B</td></tr>
            <tr><td></td><td></td><td></td><td>C</td></tr>
            <tr><td></td><td></td><td></td><td>D</td></tr>
            <tr><td></td><td></td><td></td><td>E</td></tr>
          </table>
          </center>
      </MediaQuery>
      </div>
      <center><h1>Converter</h1>
      <table>
        <tr><th>Binary</th><td><input id='bin' pattern='[01]*' onChange={convBin}/></td></tr>
        <tr><th>Octal</th><td><input id='oct' pattern='[0-7]*' onChange={convOct}/></td></tr>
        <tr><th>Decimal</th><td><input id='dec'pattern='[0-9]*' onChange={convDec}/></td></tr>
        <tr><th>Hexadecimal</th><td><input id='hex' pattern='[0-9a-eA-e]*' onChange={convHex}/></td></tr>
      </table></center><br/>
      <center><div className='footer'>Made by Joanna Vidad, with the help of her Brother</div></center>
    </div>
    
    </>
  );
}

export default App;
