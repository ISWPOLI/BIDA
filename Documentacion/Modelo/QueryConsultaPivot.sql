USE [AntaraBBVA]
GO
/****** Object:  StoredProcedure [dbo].[consultaChequesAnalisLib]    
AUTOR: Jesus David Jinete Clemow 
Descripción: Desarrollo de consulta pivot para armar data de la tabla Data_BBVA_BIDA
Script Date: 08/05/2017 23:14:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[consultaPivot_DATA_BBVA_BIDA]

AS

BEGIN

SELECT * FROM DATA_BBVA_BIDA
END
		


