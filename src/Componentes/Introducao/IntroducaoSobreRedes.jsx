import React from 'react';
import ExtensibleIcon from './ExtensibleIcon';
import './IntroducaoSobreRedes.css';
import gitHubIcon from '../../img/extensible-icon-github.svg';
import gitHubIconActive from '../../img/extensible-icon-github-active.svg';
import linkedinIcon from '../../img/extensible-icon-linkedin.svg';
import linkedinIconActive from '../../img/extensible-icon-linkedin-active.svg';
import emailIcon from '../../img/extensible-icon-email.svg';
import emailIconActive from '../../img/extensible-icon-email-active.svg';
import discordIcon from '../../img/extensible-icon-discord.svg';
import discordIconActive from '../../img/extensible-icon-discord-active.svg';

const IntroducaoSobreRedes = () => {
  return (
    <div className='Introducao-sobre-redes-container'>
      <div className='Introducao-sobre-redes-sobre-mim'>
        <h3>
          Sobre Mim
          <span className='Linear-Gradient-Red-1-Text'>:</span>
        </h3>
        <p className='Introducao-sobre-redes-sobre-mim-texto'>
          Possuo 20 anos de idade, moro em Sorocaba/SP e estou 
          cursando o segundo semestre de <span>Análise e Desenvolvimento de 
          Sistemas</span> na <span>Facens</span>. Tenho conhecimentos em <span>UI/UX</span>, 
          <span> programação Front-End</span> e atualmente procuro por 
          oportunidades para agregar valor à pessoas e negócios.
        </p>
      </div>

      <p className='Introducao-sobre-redes-canais-de-contato'>
          Canais<br/>
          de<br/>
          Contato
      </p>

      {/* Importar como um componente o svg, e/ou mudar as propriedades: 
      <stop stop-color="#EFEFEF"/>
      <stop offset="1" stop-color="#CCCCCC"/>
      Que são de linear gradient
      */}
      <nav>
        <ExtensibleIcon 
        // passar um array ou objeto com os dois ícones
        // [inativo/ativo]
        // {
        //  active: talicone,
        // inactive: ttaloutroicon
        // }
          icon={[gitHubIcon, gitHubIconActive]}
          alt={'GitHub Icon'}
          text='github.com/MatthMiller'
          href='https://github.com/MatthMiller'
        />
        <ExtensibleIcon 
          icon={[linkedinIcon, linkedinIconActive]}
          alt={'Linkedin Icon'}
          text='Matheus&nbsp;Monteiro&nbsp;Bueno'
          href='https://www.linkedin.com/in/matheus-monteiro-bueno-932bb6204/'
        />
        <ExtensibleIcon 
          icon={[emailIcon, emailIconActive]}
          alt={'Email Icon'}
          text='matheus.monteiro.genesis@gmail.com'
          href='mailto: matheus.monteiro.genesis@gmail.com'
        />
        <ExtensibleIcon 
          icon={[discordIcon, discordIconActive]}
          alt={'Discord Icon'}
          text='MatthMiller#5712'
          href=''
        />
      </nav>
    </div>
  );
}

export default IntroducaoSobreRedes;
