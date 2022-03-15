import FormasPagamento from './FormasPagamento';

export default function Footer() {
    return (
        <>
    <footer className=" text-muted">
    <div id='divFooter' className="d-flex align-items-center justify-content-around" >
        <div className="container text-white alert-link">
            &copy; Site Desenvolvido por  
            <a className="text-dark" href="https://github.com/DanielSantos08" target="_blank" rel="noreferrer"> Daniel Santos </a>
             para a
            <a className="text-dark" href="https://www.recodepro.org.br/" target="_blank" rel="noreferrer"> 
             Recode Pro  
            <img style={{height:"5vh", width:"5vh"}} 
            src="https://media.discordapp.net/attachments/756212279195992225/898801109009825863/recode-pro-2.png"
            alt='Recode-Pro Logo'></img></a>
        </div>
        <div>
            <FormasPagamento/>
        </div>
    </div>
    </footer>
        </>
    );
}