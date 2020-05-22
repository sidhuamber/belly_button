

//Creating Bar Plot

function buildPlots(xValue,yValue,hoverText,metaData){

    d3.json("././samples.json").then((data)=>{
        console.log(data);

        var labels = xValue.map(i=>`OTU ${i}`);
        var values = yValue.slice(0,10).sort(function(a,b){return a-b})
        console.log(labels);
        

        var trace1 = {
            x:values,
            y:labels,
            text:hoverText,
            type:"bar",
            orientation:"h"
        };

        var layout = {
            title: "Top 10 OTU",

            yaxis:{

                tickmode:"linear",

            },

            margin: {

                l: 100,

                r: 100,

                t: 100,

                b: 30

            }
        };

        var plotData = [trace1]
        Plotly.newPlot("bar",plotData,layout);

        //bubble chart

        //Creating trace 2

        var trace2 = {
            x:labels,
            y:values,
            mode:"markers",
            marker:{

                size:values,
                color:labels
            },
            text:labels

        }

        // Creating layout for the buble chart

        var layout_buble={
            xaxis:{title:"OTU ID"},
            height:600,
            width:1000
        };

        //creating data variable
        var data1=[trace2];

        //Create the bubble plot

        Plotly.newPlot("bubble",data1,layout_buble);
    })




}




    

// Main code
d3.json("././samples.json").then((data)=>{
    dropDown();
    var xValue = data["samples"][0]["otu_ids"];
    var yValue = data["samples"][0]["sample_values"];
    var hoverText = data["samples"][0]["otu_labels"];
    var metaData = data["metadata"][0];
    buildPlots(xValue,yValue,hoverText,metaData);
    
});

// define dropdown function
function dropDown(){

    d3.json("././samples.json").then((data)=>{
        var name = data.names;
        //console.log(name);

        var idSelect = document.getElementById('selDataset')
        for (i=0;i<name.length;i++){
            var option = document.createElement("option");
            option.text=name[i];
            idSelect.add(option);
        };
    });
};


    





