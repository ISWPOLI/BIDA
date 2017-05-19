package com.example.jrubiaob.bida;

import android.Manifest;
import android.content.Intent;
import android.net.Uri;
import android.support.v4.content.ContextCompat;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class Encuesta extends AppCompatActivity implements View.OnClickListener{

    private Button btnLlamar;
    private Button btnBBVA;
    private Button btnBida;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_encuesta);

        this.btnLlamar = (Button)findViewById(R.id.btn_llamar);
        this.btnBBVA = (Button)findViewById(R.id.btn_bbvaencuesta);
        this.btnBida = (Button)findViewById(R.id.btn_bidaencuesta);

        this.btnBida.setOnClickListener(this);
        this.btnBBVA.setOnClickListener(this);
        btnLlamar.setOnClickListener(this);
    }

    @Override
    public void onClick(View v) {
        if(v == btnLlamar){
            int permissionCheck = ContextCompat.checkSelfPermission(this,
                    Manifest.permission.CALL_PHONE);
            Intent i = new Intent(Intent.ACTION_DIAL);
            i.setData(Uri.parse("tel:3212582365"));
            startActivity(i);
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
