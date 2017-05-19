package com.example.jrubiaob.bida;

import android.app.ProgressDialog;
import android.content.Intent;
import android.os.Handler;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {

    private Button btnContinuar;
    private Button btnBBVA;
    private Button btnBida;
    private ProgressDialog progress;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        this.btnContinuar = (Button)findViewById(R.id.btn_continuar);
        this.btnBBVA = (Button)findViewById(R.id.btn_bbva);
        this.btnBida = (Button)findViewById(R.id.btn_bida);

        this.btnContinuar.setOnClickListener(this);
        this.btnBida.setOnClickListener(this);
        this.btnBBVA.setOnClickListener(this);
    }

    public void analizar(View view){
        progress=new ProgressDialog(this);
        progress.setMessage("Analizando...");
        progress.setProgressStyle(ProgressDialog.STYLE_HORIZONTAL);
        // progress.setIndeterminate(true);
        progress.setProgress(0);
        progress.show();

        final int totalProgressTime = 100;
        final Thread t = new Thread() {
            @Override
            public void run() {
                int jumpTime = 0;

                while(jumpTime < totalProgressTime) {
                    try {
                        jumpTime += 5;
                        progress.setProgress(jumpTime);
                        sleep(200);
                    }
                    catch (InterruptedException e) {
                        Log.e("BIDA", e.getMessage());
                    }
                }
                progress.cancel();

                Intent i = new Intent(MainActivity.this, Graph.class);
                startActivity(i);
                 
            }
        };
        t.start();

    }


    @Override
    public void onClick(View v) {
        if(v == this.btnContinuar){
            this.analizar(v);

        }
    }
}
