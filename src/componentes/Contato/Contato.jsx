import React from 'react';
import styles from './Contato.module.css';
import contatoTitle from '../../img/contato-title.svg';
import enviarBtn from '../../img/enviar-btn.svg';

const Contato = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Formulário temporariamente indisponível. Contate-me por um dos meus canais de contato.')
  }

  return (
    <>
    <section className={styles.container} id='Contato-container'>
      <h2 className={styles.sectionTitle}>
        <img src={contatoTitle} alt='Título Contato' />
      </h2>

      <div className={styles.formContainer}>
        <p className={styles.formSubtitle}>Respostas em até 24h</p>
        <h3 className={styles.formTitle}>Me envie uma mensagem<b>!</b></h3>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label
            className={styles.label}
            htmlFor='nome'
          >
            Nome
          </label>
          <input 
            className={styles.input}
            type='text'
            id='nome'
            placeholder='Digite seu nome aqui'
            maxlength='80'
          />
          <label
            className={styles.label}
            htmlFor='email'
            maxlength='80'
          >
            E-mail
          </label>
          <input
            className={styles.input}
            type='email'
            id='email'
            placeholder='Digite seu e-mail para contato'
          />
          <label
            className={styles.label} 
            htmlFor='assunto'
          >
            Assunto
          </label>
          <input
            className={styles.input}
            type='text'
            id='assunto'
            placeholder='Propostas de trabalho, dúvidas'
            maxlength='80'
          />
          <label 
            className={styles.label}
            htmlFor='mensagem'
          >
            Mensagem
          </label>
          <textarea
            className={styles.textarea}
            id='mensagem'
            placeholder='Digite aqui sua mensagem'
            cols='30' 
            rows='8'
            maxlength='500'
          />
          <button className={styles.enviarBtn}>
            <img src={enviarBtn} alt='Ver em tela cheia' />
          </button>
        </form>

      </div>

    </section>
    <footer className={styles.footer}>
      <p className={styles.email}>
        <span className={styles.emoji}>📧 </span>
        matheus.monteiro.genesis@gmail.com 
        <span className={styles.emoji}> 📧</span>
      </p>
    </footer>
    </>
  )
}

export default Contato;
