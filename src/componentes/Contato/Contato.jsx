import React from 'react';
import styles from './Contato.module.css';
import contatoTitle from '../../img/contato-title.svg'

const Contato = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
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
          />
          <label
            className={styles.label}
            htmlFor='email'
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
            rows='10'
          />
          <button>Enviar</button>
        </form>
      </div>
    </section>
  )
}

export default Contato;
