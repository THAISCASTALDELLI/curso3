import { getCSS } from "./common.js"
async function quantidadeUsuariosPorRede() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeDeUsuarios = Object.values(dados)
   
    const data = [
        {
          x: 'nomeDasRedes',
          y: quantidadeDeUsuarios,
          type: 'bar',
          marker: {
            color: getCSS ("--primary-color")
          }
        }
      ]


    const layout = {
        plot_bgcolor: getCSS("--bg-color"),
        peper_bgcolor: getCSS("--bg-color"),
        title:{
            Text: "Redes sociais com mais usuários no mundo",
            x: 0,
            font:{
                color: getCSS("--primary-color"),
                family: getCSS ("--font"),
                size: 30
            }
        },
        xaxis: {
         title: { 
            Text:"nome das redes sociais",
            font:{ 
                color: getCSS("--secondary-color")
            }
         }
        },
        yaxis:{
            title: { 
                Text:"bilhões de usuários ativos",
                font:{ 
                    color: getCSS("--secondary-color")
                }
             }
        }
    }

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)
}

quantidadeUsuariosPorRede()
   