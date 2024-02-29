<?php

include("conexion.php");

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: X-Requested-With');
header('Content-Type: application/json');

// Endpoint to get data from the database
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    
    // Case 1: If 'CveCat' parameter is present, retrieve data based on 'CveCat'
    if (isset($_GET['CveCat'])) {
        $CveCat = $_GET['CveCat'];
        $queryVencabeza = "SELECT * FROM vencabeza WHERE CveCat = '$CveCat'";
        $resultVencabeza = $conexion->query($queryVencabeza);

        $bimestral = array();
        while ($row = $resultVencabeza->fetch_assoc()) {
            $bimestral[] = $row;
        }

        if (!empty($bimestral)) {
            $numcontrato = $bimestral[0]['numcontrato'];

            $queryVestimado = "SELECT * FROM vestimado WHERE contrato = '$numcontrato'";
            $resultVestimado = $conexion->query($queryVestimado);

            $anual = array();
            while ($row = $resultVestimado->fetch_assoc()) {
                $anual[] = $row;
            }

            $data = array(
                'bimestral' => $bimestral,
                'anual' => $anual
            );

            header('Content-Type: application/json');
            echo json_encode($data);
        } else {
            header('Content-Type: application/json');
            echo json_encode(array('error' => 'No data found for the given CveCat'));
        }
        exit;
    }

    // Case 2: If 'Contrato' parameter is present, retrieve data based on 'Contrato'
    if (isset($_GET['Contrato'])) {
        $Contrato = $_GET['Contrato'];
        
        // Retrieve data from 'vencabeza' based on 'Contrato'
        $queryVencabeza = "SELECT * FROM vencabeza WHERE numcontrato = '$Contrato'";
        $resultVencabeza = $conexion->query($queryVencabeza);

        $bimestral = array();
        while ($row = $resultVencabeza->fetch_assoc()) {
            $bimestral[] = $row;
        }

        if (!empty($bimestral)) {
            // Extract 'numcontrato' value
            $numcontrato = $bimestral[0]['numcontrato'];

            // Query to fetch data from 'vestimado' using 'numcontrato'
            $queryVestimado = "SELECT * FROM vestimado WHERE contrato = '$numcontrato'";
            $resultVestimado = $conexion->query($queryVestimado);

            $anual = array();
            while ($row = $resultVestimado->fetch_assoc()) {
                $anual[] = $row;
            }

            // Combine the results into a single array
            $data = array(
                'bimestral' => $bimestral,
                'anual' => $anual
            );

            // Return data as JSON with the specified names
            header('Content-Type: application/json');
            echo json_encode($data);
        } else {
            header('Content-Type: application/json');
            echo json_encode(array('error' => 'No data found for the given Contrato'));
        }
        exit;
    }

    // If neither 'CveCat' nor 'Contrato' parameters are present, handle the error
    header('Content-Type: application/json');
    echo json_encode(array('error' => 'Invalid request. Please provide either CveCat or Contrato parameter.'));
}

// Close the database connection
$conexion->close();
?>
