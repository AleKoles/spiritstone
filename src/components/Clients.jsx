import React from 'react';

const Clients = () => {
  return (
    <section id="clients" className='w-full pb-24 px-4 flex flex-col max-w-7xl mx-auto gap-12'>
      <h2 class="w-full text-center text-3xl sm:text-5xl cormorant font-bold">Our Clients</h2>
      <div className="flex flex-row w-full flex-wrap gap-12 justify-center items-center ">
        <a href="https://zolotiyvik.ua/ua/" target="_blank" rel="noreferrer" className="grayscale hover:grayscale-0 duration-150 ease-in-out">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="40" fill="none"><path d="M73.938 16.496h-3.876v-.992h.375l.063-.062c.062-.062.125-.124.125-.186.062-.124.062-.248.125-.372 0-.124.063-.248.063-.372v-7.07c0-.062 0-.186-.063-.31a.472.472 0 0 0-.125-.31c-.063-.062-.063-.124-.125-.186l-.063-.062h-.375V5.58h3.876v.993H73.5c-.063.062-.125.124-.125.186-.062.124-.063.248-.125.372 0 .124-.063.248-.063.31v4.961l5.063-4.961c0-.062 0-.186-.063-.31a.472.472 0 0 0-.124-.31c-.063-.062-.126-.186-.188-.186l-.063-.062H77.5V5.58h3.875v.993H81s-.063 0-.125.062c-.063.062-.125.124-.125.186-.063.124-.063.248-.125.372 0 .124-.063.248-.063.31v7.132c0 .124 0 .186.063.31.062.124.062.248.125.372.062.062.125.186.187.248l.063.062h.375v.992H77.5v-.992h.375l.062-.062a.856.856 0 0 0 .188-.248c.063-.124.062-.248.125-.372 0-.124.062-.248.062-.372V9.612l-5.062 4.962c0 .124 0 .248.063.372 0 .124.062.248.124.372a.856.856 0 0 0 .188.248h.437l-.124.93ZM60 8.496c0-.124 0-.31.062-.496.063-.186.125-.31.25-.496a.64.64 0 0 1 .375-.31c.125-.062.313-.124.5-.124h1.75v7.442c0 .124 0 .248-.062.372a.472.472 0 0 1-.125.31.859.859 0 0 1-.188.248l-.062.062h-.375v.992h3.937v-.992h-.437c-.063-.062-.125-.186-.188-.248-.062-.124-.125-.248-.125-.31 0-.124-.062-.248-.062-.31V7.194h1.813c.187 0 .374.062.5.124.124.062.312.186.374.31.125.124.188.31.25.434.063.186.063.31.063.496v.372h.937V5.581H59.062v3.287H60v-.372Zm38.813-.62c.062-.186.124-.434.187-.558.062-.124.187-.248.312-.372.125-.062.188-.124.313-.124H100V5.643h-5.75V6.76h.375c.062 0 .187.062.25.124.125.124.25.248.313.434.062.186.187.372.187.558.062.248.062.372.062.558v.062l-8.562 8.31V8.434c0-.186 0-.372.062-.558l.188-.558c.062-.186.188-.31.25-.372a.475.475 0 0 1 .25-.124H88V5.643h-5.688V6.76h.376c.062 0 .124 0 .25.124.124.124.25.248.312.434s.187.372.187.558c.063.186.063.372.063.558v11.349c0 .186 0 .372-.063.62-.062.186-.125.434-.187.62-.063.186-.188.31-.313.434s-.187.124-.25.124h-.375v1.117H88V21.58h-.375c-.063 0-.125 0-.188-.124a1.88 1.88 0 0 1-.312-.434 7.725 7.725 0 0 1-.188-.62c-.062-.186-.062-.434-.062-.62v-.124l8.562-8.31v8.434c0 .186 0 .372-.062.62-.063.186-.125.434-.187.62-.063.186-.188.31-.313.434a.476.476 0 0 1-.25.124h-.375v1.117H100V21.58h-.375s-.125 0-.25-.124-.25-.248-.313-.434c-.125-.186-.187-.372-.25-.62-.062-.186-.062-.434-.062-.62V8.434c0-.186 0-.372.063-.558Zm-10.75-4.217c.874.434 2 .682 3.437.682 1.187 0 2.312-.186 3.187-.62 1-.434 1.5-1.116 1.5-1.985 0-.434-.125-.868-.437-1.178A1.544 1.544 0 0 0 94.562 0c-.437 0-.812.124-1.125.434-.25.248-.5.62-.812 1.24-.25.497-.688 1.117-1.188 1.117-.375 0-.812-.372-1.187-1.117-.375-.682-.688-1.116-.938-1.302-.25-.248-.625-.31-1-.31-.5 0-.875.186-1.187.496-.313.31-.5.744-.5 1.178 0 .807.5 1.427 1.437 1.923Zm-77.25 7.752c.812-.496 1.374-.93 1.75-1.426.5-.62.75-1.365.75-2.233 0-1.302-.5-2.419-1.563-3.287-1.063-.93-2.625-1.364-4.688-1.364-1.25 0-2.375.124-3.375.434-.937.248-1.562.558-1.937.868l-.063.062v.124A13.649 13.649 0 0 0 1.5 6.884v.868l.25.062c.125.062.25.062.375.062.063 0 .125 0 .313-.062l.187-.062.063-.186C3.124 6.512 3.75 5.767 4.562 5.27c.813-.496 1.625-.744 2.438-.744 1.063 0 1.813.31 2.375.868.563.558.813 1.365.813 2.295 0 .868-.376 1.674-1.126 2.48-.75.745-2.187 1.179-4.312 1.179h-.375v1.488h.375c.188 0 .563 0 1.313-.062s1.187-.062 1.312-.062c1.25 0 2.25.31 3 .992.75.683 1.125 1.675 1.125 2.977 0 1.303-.438 2.419-1.25 3.287-.813.868-1.875 1.302-3.188 1.302a4.14 4.14 0 0 1-1.875-.434c-.812-.372-1.062-.62-1.187-.806-.188-.248-.313-.682-.5-1.24-.25-.93-.875-1.427-1.75-1.427-.5 0-.938.186-1.25.559-.375.248-.5.682-.5 1.178 0 .992.688 1.86 2.063 2.542 1.312.62 2.874.993 4.812.993 2.125 0 3.938-.62 5.5-1.737 1.563-1.178 2.375-2.666 2.375-4.403-.063-2.48-1.375-4.155-3.938-5.085Zm4.562 2.418a5.957 5.957 0 0 1-.875-3.1c0-.62.125-1.365.375-2.047a5.111 5.111 0 0 1 1.25-1.984c.562-.558 1.125-1.055 1.75-1.303A8.002 8.002 0 0 1 21 4.775c1.75 0 3.25.62 4.5 1.799 1.187 1.178 1.813 2.666 1.813 4.34 0 1.551-.626 2.915-1.876 4.094-1.25 1.178-2.812 1.798-4.75 1.798a6.213 6.213 0 0 1-3.312-.93c-.75-.434-1.438-1.116-2-2.046Zm1.938-2.852c0 1.55.312 2.666 1 3.41.687.745 1.5 1.117 2.5 1.117.624 0 1.187-.186 1.812-.496.563-.31 1-.868 1.375-1.613.375-.744.5-1.612.5-2.666 0-.682-.125-1.427-.438-2.295-.25-.868-.687-1.488-1.187-1.86-.563-.434-1.188-.62-1.938-.62-.562 0-1.125.124-1.687.372-.563.248-1 .744-1.375 1.426-.375.806-.562 1.86-.562 3.225ZM50.25 26.419v10.604c0 .186 0 .372.062.558l.188.558c.062.124.187.31.312.373.125.124.188.124.188.124h.375v1.116H46v-1.116h.375s.125 0 .187-.124c.125-.124.188-.248.25-.373l.188-.558c.062-.186.063-.372.063-.558V26.42c0-.124 0-.31-.063-.497l-.187-.558c-.063-.124-.188-.248-.25-.372-.126-.124-.188-.124-.188-.124H46v-1.116h5.375v1.116H51c-.125 0-.188.062-.313.124-.125.124-.187.186-.25.372l-.187.558v.497Zm-1.313-1.303h-.5v13.396h.5V25.116Zm20.125 14.636h-2.375c-.937 0-1.687-1.426-2.375-2.79-.062-.063-.062-.125-.062-.187l-1.938-3.845c-.25-.558-.75-1.054-1.375-1.426-.562-.31-1.124-.558-1.687-.62v5.705c0 .248 0 .434.063.682.062.248.124.434.187.62.062.186.187.373.312.497s.188.124.313.124h.375v1.178h-6.063v-1.178h.375c.125 0 .188-.062.313-.124.125-.124.25-.248.312-.435.125-.248.188-.434.25-.682.063-.248.063-.434.063-.682V24c0-.186 0-.372-.063-.62-.062-.248-.125-.434-.187-.682-.063-.186-.187-.31-.312-.434-.063-.062-.188-.124-.376-.124h-.375V20.96h6v1.179h-.375c-.062 0-.125 0-.25.123-.125.124-.25.31-.312.497a1.243 1.243 0 0 0-.187.682c-.063.248-.063.434-.063.62v4.651s.062.062.25.124c.75-.124 1.625-.31 1.812-.434.688-.682 1.25-1.798 1.688-3.473.813-2.852 2.188-4.403 4.063-4.589h.437c1.25 0 2 .682 2.125 1.86.062.497-.062.93-.312 1.24-.25.311-.688.497-1.188.559h-.188c-.625 0-1.187-.31-1.562-.93-.25-.31-.313-.372-.375-.372-.25.062-.875.434-1.5 2.915-.438 1.612-1.063 2.852-1.875 3.72l-.125.124c.312.062.562.186.812.372.813.497 1.5 1.303 2.063 2.357l2 3.907c.125.31.375.62.625.93.25.31.562.62.875.868.312.248.625.497 1 .683.312.124.562.248.875.248h.375V40h-2.063v-.248ZM57.688 22.326s-1.063-.497-.875-.31c.062.061.374.496.374.496v15.876h.5V22.326Zm11.124 16.558-.75-.496s-1-.807-1.75-1.923c-1.062-1.55-1.75-3.845-2.5-4.9-.875-1.24-2.5-1.425-2.5-1.425s1.125.62 2 1.736c.625.806 1.75 3.287 2.813 4.837.813 1.303 2.687 2.17 2.687 2.17Zm-26.562-.372c-.688.434-1.5.744-2.375.93-.875.186-1.75.31-2.688.31h-6v-.992h.5c.063 0 .063 0 .125-.062.125-.062.188-.186.25-.31l.188-.372c.062-.124.063-.31.063-.373v-14.76c0-.123 0-.185-.063-.371-.063-.125-.063-.248-.188-.372-.062-.125-.125-.187-.25-.31-.062-.063-.125-.063-.25-.063h-.5v-.992h5.5c2 0 3.625.434 4.75 1.178 1.188.807 1.813 1.923 1.813 3.35 0 .557-.125 1.116-.375 1.612-.25.434-.5.868-.875 1.24-.313.372-.688.62-1.125.868-.063.062-.125.062-.187.124.5.124.937.31 1.312.558.625.373 1.125.807 1.5 1.303.375.496.687.992.812 1.612a5.07 5.07 0 0 1 .25 1.613c0 1.054-.25 1.922-.625 2.604-.312.682-.875 1.24-1.562 1.675Zm-2.125-15.938s1.562.992 1.562 2.728c0 2.047-1.625 3.163-1.625 3.163s2.063-.992 2-3.225c-.062-1.86-1.937-2.666-1.937-2.666Zm-4.938 6.077h1.25c.813 0 1.5-.124 2-.31s.938-.434 1.188-.682c.312-.31.5-.558.625-.93s.187-.682.187-1.055v-.186c-.062-.992-.437-1.736-1.124-2.294-.688-.558-1.688-.868-2.938-.868h-1.188v6.325ZM34 22.077s-1.063-.558-.875-.372c.062.063.375.497.375.497V38.45h.5V22.077Zm7.687 12.59v-.31c-.187-1.303-.687-2.357-1.5-3.04-.874-.743-2.062-1.053-3.625-1.053h-1.375v7.875h1.438c1.625 0 2.875-.31 3.812-.93.813-.62 1.25-1.426 1.25-2.542Zm1.688-.993c-.313-2.418-2.75-3.287-2.75-3.287s2.062 1.179 2.312 3.411c.313 2.667-1.625 4.218-1.625 4.218s2.438-1.427 2.063-4.342Zm-2.75-15.441h-22.75v.62h23.687l-.937-.62Zm15.125.62H79.5v-.62H56.687l-.937.62Zm-13.875-6.946c.062-1.116.5-1.985 1.25-2.605.687-.558 1.313-.806 2.063-.744.562 0 1 .186 1.312.558.25.31.375.682.375 1.117-.063.744-.313 1.364-.813 1.86-.437.434-.875.744-1.5.806 0 0-.187-.062-.25-.124 0-.062.063-.248.125-.248.563-.248.875-.434 1.188-.806.375-.434.625-.93.625-1.426 0-.435-.063-.807-.25-1.055-.188-.248-.437-.434-.75-.434-.625-.062-1.375.31-1.875.93-.5.62-.937 1.427-.937 2.233 0 .558.187.992.5 1.24.374.31.75.496 1.374.496.875.062 1.75-.186 2.625-.93 1-.806 1.5-1.798 1.563-2.915 0-.434-.063-.806-.313-1.116L48 8.558c-.312.124-.563.31-.813.558-.062.062-.125.062-.187.062-.125 0-.187-.062-.187-.248s.124-.31.374-.434c.125-.062.25-.124.438-.186-.188-.124-.438-.186-.75-.248-.312.062-.5.062-.688.062h-.562c-.063 0-.062 0-.125-.062-.062-.062-.125-.124-.063-.248.063-.186.125-.248.313-.248.75.062 1.375-.062 1.875-.186.875-.31 1.625-1.054 1.687-2.047 0-.372-.187-.682-.562-.93-.313-.186-.688-.372-1.063-.372-.437 0-.874.062-1.25.186-.25.062-.687.31-.812.434s-.188.248-.25.31c-.063.186 0 .434.125.434s.312.124.312.248c.063.186 0 .373-.187.497-.188.186-.438.248-.625.186a.47.47 0 0 1-.438-.31 1.163 1.163 0 0 1-.125-.497c0-.558.376-.992 1.063-1.364.688-.372 1.437-.496 2.375-.496.562 0 1.062.186 1.5.496.437.31.625.62.563.992-.063.682-.376 1.303-1.126 1.86-.562.435-1.062.683-1.5.745.25.062.5.124.688.248 1-.31 2.125-.496 3.312-.434.375-.372.938-.744 1.625-.992.125-.062.188-.062.188 0s-.063.124-.188.124c-.5.124-.875.434-1.187.806 2.062.062 3.062.744 3 2.108-.063.62-.375 1.179-.938 1.613-.562.434-1.25.682-2 .744v.062c.75 0 1.376.186 1.876.62s.687.93.687 1.55c-.063.869-.5 1.613-1.312 2.11-.75.495-1.626.743-2.626.743-.5 0-1.187-.062-2.062-.124-.875-.124-1.375-.124-1.562-.124-.625 0-1.063.124-1.376.31-.062.062-.124.062-.124.062v-.124c.187-.434.562-.682 1.125-.682h.437c.063 0 .187 0 .25-.062.5-.248.875-.744 1.125-1.488s.562-1.613.875-2.667c.375-1.24.625-2.17.813-2.667a4.428 4.428 0 0 1 1.124-1.798c-1.062 0-2 .186-2.875.496.125.124.313.248.438.434.375.434.562.868.5 1.24-.063 1.24-.688 2.295-1.938 3.101-1.062.744-2.062 1.054-3.062.992-.813-.061-1.437-.31-1.938-.744a2.812 2.812 0 0 1-.312-1.302Zm8.75-1.488c-.313.806-.563 1.674-.875 2.48-.313.868-.625 1.55-.875 1.985-.5.806-1 1.302-1.563 1.55.188 0 .688.124 1.563.31.687.124 1.25.186 1.75.186.812 0 1.5-.248 2-.744.562-.496.812-1.116.812-1.984 0-.62-.187-1.117-.625-1.489-.437-.372-1-.558-1.75-.558H50.5s.062-.062.125-.186c.125-.124.187-.124.375-.124h.625c.5 0 1-.248 1.5-.682.562-.496.812-1.055.812-1.675 0-.558-.25-.992-.687-1.302-.438-.31-.938-.496-1.563-.558-.187.496-.562 1.364-1.062 2.79ZM39.75 14.388a12.269 12.269 0 0 1-.5-3.473c0-1.055.125-1.985.312-2.729.25-.806.563-1.674 1.125-2.605.5-.93 1.125-1.736 1.875-2.356.75-.62 1.75-1.178 3.063-1.675.937-.31 2.062-.496 3.5-.496.937 0 1.875.124 2.75.434s1.75.683 2.437 1.179c.75.496 1.5 1.302 2.188 2.356.5.744.875 1.489 1.188 2.357.312 1.116.5 2.232.5 3.41 0 1.365-.126 2.42-.313 3.35-.25.868-.625 1.736-1.125 2.604-.437.682-1.125 1.427-2.187 2.295-.688.558-1.563 1.054-2.563 1.426-1 .372-2.125.558-3.313.558-1.187 0-2.25-.186-3.187-.496-.937-.31-1.688-.682-2.313-1.116-.625-.434-1.25-1.116-1.937-1.985-.688-1.054-1.188-1.984-1.5-3.038Zm14.625-11.04c1.562 1.985 2.562 4.652 2.562 7.629 0 2.976-.937 5.643-2.562 7.628 1.937-1.86 3.187-4.59 3.187-7.628 0-3.039-1.187-5.768-3.187-7.628Zm-5.813 16.993c10.438.372 10-18.48.188-18.79-9.563-.373-10.125 18.48-.188 18.79ZM40 10.977c0 3.038 1.25 5.767 3.187 7.628-1.562-1.985-2.562-4.652-2.562-7.628 0-2.977.937-5.644 2.562-7.628C41.25 5.209 40 7.938 40 10.977Zm-13.5 4.65c0 .621.625 1.18 1.375 1.18h.25c3.5-.063 4.125-4.714 4.25-6.326V7.256c0-.806.437-1.054.812-1.178h1.25c.375.062.813.372.813 1.178v7.628c0 .806-.438 1.054-.813 1.178h-.687v.496h5v-.496h-.625c-.188-.062-.438-.124-.563-.372V6.388c.188-.186.375-.31.563-.372h.687v-.621h-8.874V6.077h.687c.312.063.625.249.75.62v3.225c-.125 4.28-1.625 5.148-2.187 5.334-.188-.496-.688-.806-1.313-.806-.75 0-1.375.496-1.375 1.178Z" fill="#372924"/></svg>
        </a>
      
        <a href="https://ukrzoloto.ua/uk/" target="_blank" rel="noreferrer" className="grayscale hover:grayscale-0 duration-150 ease-in-out">
          <svg xmlns="http://www.w3.org/2000/svg" width="137" height="52" fill="none"><path d="M10.9.6h115.56c5.4 0 9.78 4.44 9.78 9.9v30.3c0 5.45-4.42 9.9-9.83 9.9H10.9a9.88 9.88 0 0 1-9.83-9.9V10.5C1.06 5.05 5.48.6 10.9.6z" stroke="#FEDC84"/><path fill-rule="evenodd" clip-rule="evenodd" d="M92.32 29.47v3.85c0 .9 1.72.85 1.82 0 .3-1.24.95-2.26 2.2-2.74v-1.1h-4.02zM61.34 42.42h7.74c.77 0 1.15-.2 1.15-.54 0-.25-.24-.45-.72-.5-.55-.1-.9-.1-.9-.74v-9.53c0-.57.5-.6.95-.75.43-.05.67-.2.67-.44 0-.66-1.12-.54-1.58-.54h-6.88v11.31c0 .6-.45.65-.91.74-.38.1-.58.25-.58.5-.04.34.34.5 1.06.5zM53.3 29.38c-.8 0-1.24.14-1.24.48 0 .19.24.38.72.57 1.05.34 1.58.92 1.58 1.79v6.11c0 .5-.14 2.22-.91 1.45a3.4 3.4 0 0 0-2.68-1.16c-1.07 0-3.1.4-3.1 1.83 0 1.55 2.3 1.97 3.43 1.97 2.43 0 5.12-.72 5.12-4.14v-6.11c0-1.18 1.04-1.78 2.1-1.78h2.16v-1.01H53.3zM42.5 18.69c-.58.33-.82.82-.82 1.3 0 .58.3 1 .96 1.4.62.38 1.39.57 2.3.57 1.57 0 2.82-.43 3.68-1.35l.43-.57-.86-1.02c-.1.39-.29.63-.58.63-.1 0-.19-.14-.33-.38a3.23 3.23 0 0 0-2.63-1.16c-.9.05-1.58.24-2.15.58zM15.67 29.23v1.06c.72 0 1.25.14 1.58.43.34.3.53.68.53 1.11v1.69c0 .62-.15 1-.48 1.3-.29.24-.86.38-1.63.38v1.06c1.44.1 2.1.63 2.1 1.54v1.97c0 .63-.18 1.06-.52 1.3-.33.25-.86.34-1.62.34v1.1c2.8 0 9.03.59 9.03-3.46 0-2.75-3.54-3.12-5.6-3.37 1.9-.32 5.32-.67 5.32-3.22 0-3.7-6.43-3.23-8.7-3.23zm11.96 6.65c0 4.69 4.75 6.6 8.75 6.6v-1.02c-.53-.1-.91-.24-1.1-.48-.2-.24-.29-.58-.29-1.06v-8.38c0-.67.48-1.1 1.43-1.3v-1c-3.99 0-8.8 1.95-8.8 6.64zm10.08-5.59c.96.2 1.39.63 1.39 1.3v8.38c0 .48-.1.86-.29 1.06-.19.24-.57.38-1.1.43v1.01c3.99 0 8.8-1.9 8.8-6.6 0-4.64-4.84-6.64-8.8-6.64v1.06zM72 35.88c0 4.69 4.76 6.6 8.75 6.6v-1.02c-.53-.1-.9-.24-1.1-.48-.2-.24-.29-.58-.29-1.06v-8.38c0-.67.48-1.1 1.44-1.3v-1c-4 0-8.8 1.95-8.8 6.64zm10.09-5.59c.95.2 1.38.63 1.38 1.3v8.38c0 .48-.1.86-.28 1.06-.2.24-.58.38-1.1.43v1.01c3.98 0 8.8-1.9 8.8-6.6 0-4.64-4.85-6.64-8.8-6.64v1.06z" fill="#FFDF89"/><path fill-rule="evenodd" clip-rule="evenodd" d="M111.2 35.88c0 4.69 4.77 6.6 8.76 6.6v-1.02c-.53-.1-.91-.24-1.1-.48-.2-.24-.29-.58-.29-1.06v-8.38c0-.67.48-1.1 1.44-1.3v-1c-4 0-8.8 1.95-8.8 6.64z" fill="#FFDC88"/><path fill-rule="evenodd" clip-rule="evenodd" d="M121.3 30.29c.95.2 1.38.63 1.38 1.3v8.38c0 .48-.1.86-.29 1.06-.19.24-.57.38-1.1.43v1.01c3.99 0 8.8-1.9 8.8-6.6 0-4.64-4.84-6.64-8.8-6.64v1.06zM8.26 30.1v3.08c0 1.17 1.67.51 1.91-.24.54-1.63 2.75-2.44 4.26-2.65v-1.01c-1.36.1-2.68.43-4.02.67-.33 0-.52-.23-.76-.43-.5-.5-1.39-.1-1.39.58zm6.17 12.42v-1.1c-.44 0-2.44.12-2.44-.44 0-.24.22-.24.29-.24 1.29-.2 1.91-.68 1.91-1.5 0-1.38-1.95-1.87-3.01-1.87-1.25 0-3.25.53-3.25 2.12 0 2.7 4.64 3.03 6.5 3.03zM41.97 8.96c-.76 0-1.15.15-1.15.48 0 .42 1.1.65 1.34 1.06l7.27 8.96 2.73-3.76-4.07-4.81c-.7-.72.91-.78.91-1.35 0-.34-.38-.53-1.15-.53l-5.88-.05zM97.1 42.23h7.94c.95 0 1.43-.2 1.43-.53 0-.24-.24-.43-.76-.48-.59-.1-1.15-.06-1.15-.77V29.47h-6.88v10.98c0 .69-.59.67-1.15.72-.53.05-.77.2-.77.48-.04.39.43.58 1.34.58zM80.37 21.86h7.36c.86 0 1.3-.19 1.3-.52 0-.3-.25-.44-.77-.49a3.32 3.32 0 0 1-.91-.19c-.1-.1-.15-.24-.15-.53V9.11h-6.88c-.72 0-1.1.19-1.1.53 0 .24.2.38.57.48.43.1.67.19.77.29.1.1.14.24.14.43v9.34c0 .24-.05.43-.14.48-.1.1-.34.15-.72.24-.38.1-.62.24-.62.48.05.3.43.48 1.15.48zM88.73 9.1h-.28v1.02c.62.1 1.05.24 1.29.43.24.2.38.53.38.96v2.99c0 .48-.14.82-.38 1.01-.24.2-.67.38-1.3.48V17c1.1 0 2.16-.05 3.07-.14 1.53-.2 2.77-.58 3.58-1.25a3.13 3.13 0 0 0 1.3-2.56 3 3 0 0 0-1.25-2.5 6.62 6.62 0 0 0-3.4-1.25c-.85-.15-1.86-.2-3-.2zm21.09 24.22v-3.85h-4.06v1.16c1.31.42 1.8 1.5 2.1 2.74.28.76 1.96.94 1.96-.05zM56.75 8.96h-3.59c-.96 0-1.39.2-1.39.53 0 .15.05.24.15.3.1.04.28.14.67.23.67.2.95.43.95.82 0 .29-.05.53-.24.72l-1.57 2.26.86 1.16 2.39-3.42.33-.48c.38-.53 1-.87 1.77-1.1.43-.15.67-.3.67-.49.05-.34-.29-.53-1-.53zm10.9 5.83v1.1c1.85.09 1.58 1.98 1.58 3.33 0 2.18 2.42 2.74 4.16 2.74 1.4 0 2.74-.25 3.82-1.2.38-.34.57-.63.57-.82 0-1.25-1.5-.05-2-.05-.2 0-.29-.1-.29-.29v-1.83c0-1.55-2.07-2.2-3.3-2.36-.72-.1-1.48-.14-2.3-.14 1.42-.55 1.73-1.88 1.73-3.27 0-.4.43-.82.76-.49a3 3 0 0 0 2.54 1.16c1.01 0 2.91-.46 2.91-1.78 0-1.48-2.08-1.98-3.2-1.98-1.58 0-2.77.39-3.54 1.16-.62.58-.9 1.25-.9 1.97 0 1.91-.7 2.55-2.54 2.75z" fill="#FFDF89"/><path fill-rule="evenodd" clip-rule="evenodd" d="M59.62 21.72h7.36c.86 0 1.29-.2 1.29-.53 0-.24-.24-.38-.72-.48-.48-.1-.76-.14-.9-.24-.1-.05-.15-.24-.15-.53v-9.3c0-.19.05-.33.2-.43.14-.1.37-.19.76-.28.38-.1.57-.25.57-.49 0-.33-.38-.53-1.1-.53h-7.31c-.72 0-1.1.2-1.1.53 0 .24.19.39.57.49.38.1.67.19.76.28.1.1.15.24.15.44v9.39c0 .24-.05.38-.15.48-.1.05-.33.14-.76.24-.38.1-.57.24-.57.48 0 .29.38.48 1.1.48z" fill="#FEDC84"/></svg>
        </a>
      </div>
      
    </section>
  );
};

export default Clients;
