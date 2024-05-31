'use client'
import React, { useState } from 'react';

const TurkishAlphabet = [
  'a', 'b', 'c', 'ç', 'd', 'e', 'f', 'g', 'ğ', 'h', 'ı', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'ö', 'p', 'r', 's', 'ş', 't', 'u', 'ü', 'v', 'y', 'z'
];

const Trsifrele = () => {
  const [inputText, setInputText] = useState('');
  const [encryptedText, setEncryptedText] = useState('');

  const encryptText = () => {
    const encrypted = inputText
      .toLowerCase()
      .split('')
      .map(char => {
        const index = TurkishAlphabet.indexOf(char);
        if (index !== -1) {
          return TurkishAlphabet[(index + 3) % TurkishAlphabet.length];
        }
        return char;
      })
      .join('');
    setEncryptedText(encrypted);
  };

  const decryptText = () => {
    const decrypted = encryptedText
      .toLowerCase()
      .split('')
      .map(char => {
        const index = TurkishAlphabet.indexOf(char);
        if (index !== -1) {
          return TurkishAlphabet[(index - 3 + TurkishAlphabet.length) % TurkishAlphabet.length];
        }
        return char;
      })
      .join('');
    setInputText(decrypted);
  };

  return (
    <div>
      <h1>Türkçe Alfabe Şifreleme Uygulaması</h1>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Şifrelenecek metni girin"
      />
      <button onClick={encryptText}>Şifrele</button>
      <button onClick={decryptText}>Şifreyi Çöz</button>
      <textarea
        value={encryptedText}
        onChange={(e) => setEncryptedText(e.target.value)}
        placeholder="Şifrelenmiş metin"
      />
    </div>
  );
};

export default Trsifrele;
