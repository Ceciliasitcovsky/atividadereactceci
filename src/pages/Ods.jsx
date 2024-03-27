import imgOds from '../images/logo-ods_0.png'

export default function Ods() {
    return (
        <section>
            <article>
            <div className= 'pagesodstitu'>Ods, uma virada de chave para o futuro.</div>    
            </article>
            <p className='textoods1'> Mas o que são as ods?</p>
            <img className= 'imgodsG' src={imgOds} />            
            <p>As Ods são as metas de desenvolvimento sustentáveis produzidos pela ONU </p>
            <article>
            <div className= 'pageods'>Nesse projeto integrador 3, tivemos que escolher alguma ODS para desenvolvermos com base em um desafio uma solução técnologica. Então as escolhidas foram:</div>
            </article>
            
            <img></img>
            
            <h3 className='textoods'>Ods 08</h3>
            <p>O aplicativo promoverá o crescimento econômico ao fornecer uma plataforma para produtores locais divulgarem e venderem seus produtos, criando oportunidades de trabalho e renda para eles. Isso contribui para o ODS 8 ao incentivar o empreendedorismo e o desenvolvimento econômico local.</p>
            
            <h3 className='textoods'>Ods 12</h3>
            <p>Promovendo o consumo sustentável ao incentivar os consumidores a apoiarem produtos locais, que geralmente têm uma ligação ambiental menor devido às distâncias de transporte mais curtas e práticas de produção sustentáveis. Isso está alinhado com o ODS 12, que visa reduzir o desperdício e promover práticas de consumo responsáveis.</p>
            
            <h3 className='textoods'>Ods 17</h3>
            <p>Ao colaborar com produtores locais, consumidores, organizações sem fins lucrativos e outras partes interessadas para alcançar seus objetivos de promover a produção local e fortalecer a economia de Recife. Essa colaboração representa o ODS 17, que enfatiza a importância de parcerias para alcançar os objetivos de desenvolvimento sustentável.</p>
        </section>
    )
}