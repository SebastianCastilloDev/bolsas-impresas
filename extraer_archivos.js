const fs = require('fs');
const path = require('path');

// Configuración personalizable
const config = {
    rootDir: process.cwd(), // Directorio raíz del proyecto
    extensions: ['.js', '.jsx', '.css', '.json'], // Extensiones a incluir
    outputFile: path.join(process.cwd(), 'consolidado.txt'), // Archivo de salida
    ignoreDirs: ['node_modules', '.git', '.next'], // Directorios a ignorar
    excludedFiles: [
        'consolidado.txt', 
        'package-lock.json', 
        '.eslintrc.json', 
        'postcss.config.js', 
        'tailwind.config.js', 
        'jsconfig.json', 
        'extraer_archivos.js',
        'globals.css',
        'next.config.js',
    ] // Archivos a ignorar
};

// Función para verificar si un archivo o directorio debe ser ignorado
function shouldIgnore(file, isDir = false) {
    const fileName = path.basename(file);

    // Ignorar directorios
    if (isDir && config.ignoreDirs.includes(fileName)) {
        return true;
    }

    // Ignorar archivos excluidos
    if (!isDir && config.excludedFiles.includes(fileName)) {
        return true;
    }

    // Ignorar archivos con extensiones no incluidas
    const fileExt = path.extname(file);
    if (!isDir && !config.extensions.includes(fileExt)) {
        return true;
    }

    return false;
}

// Función recursiva para encontrar archivos relevantes
function findRelevantFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);

    list.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        // Verificar si es directorio o archivo y si debe ser ignorado
        if (stat && stat.isDirectory()) {
            if (!shouldIgnore(filePath, true)) {
                results = results.concat(findRelevantFiles(filePath)); // Recursión para directorios
            }
        } else {
            if (!shouldIgnore(filePath)) {
                results.push(filePath); // Añadir archivos relevantes
            }
        }
    });

    return results;
}

// Función para consolidar el contenido de los archivos en uno solo, y generar un índice
function consolidateFiles(files) {
    let indexContent = "ÍNDICE DE ARCHIVOS:\n\n";
    let fileContent = "";

    files.forEach((file, index) => {
        const relativePath = path.relative(config.rootDir, file); // Ruta relativa
        const content = fs.readFileSync(file, 'utf8');
        
        // Añadir el archivo al índice
        indexContent += `${index + 1}. ${relativePath}\n`;

        // Añadir el contenido del archivo consolidado
        fileContent += `\n// ----- ${relativePath} -----\n\n${content}\n`;
    });

    // Combinar índice y contenido
    const finalContent = `${indexContent}\n\n${fileContent}`;

    // Escribir todo en el archivo de salida
    fs.writeFileSync(config.outputFile, finalContent, 'utf8');
    console.log(`El archivo consolidado ha sido creado: ${config.outputFile}`);
}

// Ejecutar el script
const relevantFiles = findRelevantFiles(config.rootDir);
consolidateFiles(relevantFiles);
