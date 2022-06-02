let url_1 = "https://www.mercadobitcoin.net/api/ETH/ticker/"; //ethereum R$
let url_2 = "https://economia.awesomeapi.com.br/last/USD-BRL"; //dolar

function converter(){
    fetch(url_2)
            .then(res=>{
                return res.json();
            })
            .then(data=>{
                console.log(data);
                const dolar = data.USDBRL.bid;
            ethereum(dolar);
            })
            
};


function ethereum(dolar){
    console.log(dolar);
    let input = document.getElementById("valor");
    let valor = input.value;
    fetch(url_1)
    .then(res=>{
        return res.json();
    })
    .then(data=>{
        var rate = data.ticker.last;
        let resultado = `${valor} Eth = R$ ${Math.ceil(rate*valor)}<br>ou em dolar<br>
                        ${valor} Eth = $ ${Math.ceil(rate*valor/dolar)}`;
        document.getElementById("resultado").innerHTML = resultado;
    });
}
