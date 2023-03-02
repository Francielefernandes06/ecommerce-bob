import './tendencias.sass'

export const Tendencias = () => {
    return(
        <section className='container-tendencias'>
            <h2>TENDENCIAS</h2>
            <div className='content-tendencias'>
                <div className='col-1'>
                    <div className='row-1'>
                        <img src='https://pdimagemecarreira.com/principal/wp-content/uploads/2019/03/274761-lideranca-feminina-a-importancia-de-mulheres-como-lideres-na-empresa-1030x743.jpg' alt='imagen'/>
                        <div className='dados-tendencia'> 
                        <h3>Titulo</h3>
                        <p>ver produto &gt; </p>
                        </div>
                       
                    </div>
                    <div className='row-1'>
                        <img src='https://midias.correiobraziliense.com.br/_midias/jpg/2021/03/05/675x450/1_cbpfot020320212188-6556336.jpg' alt='imagen'/>
                        <h3>Titulo</h3>
                        <p>ver produto &gt; </p>
                    </div>
                </div>
                <div className='col-1'>
                <div className='row-2'>
                        <img src='https://media.istockphoto.com/id/471887095/pt/foto/mulher-de-estilo-pin-up-retrato-de-est%C3%BAdio.jpg?s=612x612&w=0&k=20&c=WqV8K3YVBbzZYeLlBt5D04sNh5O1n2P7Fh9a0-gAZlc=' alt='imagen'/>
                        <h3>Titulo</h3>
                        <p>ver produto &gt; </p>
                    </div>
                </div>
            </div>
        </section>
    )
        
}