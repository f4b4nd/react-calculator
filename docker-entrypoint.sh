#!/bin/bash
app_name='calculator'

if [ ! -d "${app_name}" ]; then 
    echo "creating react application ${app_name}..."
    npx create-react-app ${app_name}
fi

cd "${app_name}" 

if [ ! -d "node_modules" ]; then
    npm install
fi

npm start