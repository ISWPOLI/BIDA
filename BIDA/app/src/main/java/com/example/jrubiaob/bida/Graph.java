package com.example.jrubiaob.bida;

import android.content.Intent;
import android.net.Uri;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import com.github.mikephil.charting.charts.PieChart;
import com.github.mikephil.charting.data.Entry;
import com.github.mikephil.charting.data.PieData;
import com.github.mikephil.charting.data.PieDataSet;

import java.util.ArrayList;

public class Graph extends AppCompatActivity implements View.OnClickListener{

    private PieChart pieChart;
    private Button btnAvanzar;
    private Button btnBBVA;
    private Button btnBida;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_graph);

        this.btnAvanzar = (Button)findViewById(R.id.btn_avanzar);
        this.btnAvanzar.setOnClickListener(this);
        this.btnBBVA = (Button)findViewById(R.id.btn_bbvagraph);
        this.btnBida = (Button)findViewById(R.id.btn_bidagraph);

        this.btnBida.setOnClickListener(this);
        this.btnBBVA.setOnClickListener(this);

        pieChart = (PieChart) findViewById(R.id.pieChart);

        /*definimos algunos atributos*/
        pieChart.setHoleRadius(40f);
        pieChart.setDrawYValues(true);
        pieChart.setDrawXValues(true);
        pieChart.setRotationEnabled(true);
        pieChart.animateXY(1500, 1500);
        pieChart.setCenterTextSize(80);

		/*creamos una lista para los valores Y*/
        ArrayList<Entry> valsY = new ArrayList<Entry>();
        valsY.add(new Entry(60,0));
        valsY.add(new Entry(20,0));
        valsY.add(new Entry(10,0));
        valsY.add(new Entry(10,0));

 		/*creamos una lista para los valores X*/
        ArrayList<String> valsX = new ArrayList<String>();
        valsX.add("Educativo");
        valsX.add("Vivienda");
        valsX.add("Libre inversión");
        valsX.add("Vehículo");

 		/*creamos una lista de colores*/
        ArrayList<Integer> colors = new ArrayList<Integer>();
        colors.add(getResources().getColor(R.color.red_flat));
        colors.add(getResources().getColor(R.color.green_flat));
        colors.add(getResources().getColor(R.color.blue_flat));
        colors.add(getResources().getColor(R.color.yellow_flat));

 		/*seteamos los valores de Y y los colores*/
        PieDataSet set1 = new PieDataSet(valsY, "Resultados");
        set1.setSliceSpace(3f);
        set1.setColors(colors);

		/*seteamos los valores de X*/
        PieData data = new PieData(valsX, set1);
        pieChart.setData(data);
        pieChart.highlightValues(null);
        pieChart.invalidate();

        /*Ocutar descripcion*/
        pieChart.setDescription("");
        /*Ocultar leyenda*/
        pieChart.setDrawLegend(false);
    }

    @Override
    public void onClick(View v) {
        if(v == btnAvanzar){
            Intent intent = new Intent(this, Encuesta.class);
            startActivity(intent);
        }if(v == this.btnBBVA){
            Intent intent = new Intent(Intent.ACTION_VIEW);
            intent.setData(Uri.parse("https://www.bbva.com.co/"));
            startActivity(intent);
        }if(v == this.btnBida){
            Intent intent = new Intent(Intent.ACTION_VIEW);
            intent.setData(Uri.parse("https://bida1.000webhostapp.com/"));
            startActivity(intent);
        }
    }
}
