Download Node.js command

# Download and install fnm:
    winget install Schniz.fnm

# Download and install Node.js:
    fnm install 22

# fnm version list command
    fnm ls

# node version change command (akta akta past korte hobe)
     if (-not (Test-Path $profile)) { New-Item $profile -Force }
     Invoke-Item $profile
# recend node pad open this command past and save then close nodepad
    fnm env --use-on-cd --shell powershell | Out-String | Invoke-Expression
# node.js other version install command 
    fnm i 24
# version move command 
    fnm use 22



============= express strat ===============

# folder create -> terminal open -> command 
    npm init -y
    (package.json file create)
# typeScript install
    npm i -D typescript
    npm i -g typescript

# express install 
    npm i express

# tsc install 
    tsc --init

# tsconfig.json file configer 
    (jekhane typescript file gulo likhbo tar location)
    "rootDir": "./src/", 

    (jekhane javascript file gulo theke public hobe oitar location)

# types express install
    npm i --save-dev @types/express

# compail command 
    tsc
    (tsc command deoyar por dist file a javascript file create hobe je gulo typescript file a code likhchi)

    tsc -w 
    (tsc -w dile all time compail hote thakbe, bar bar compail korte hobe na watch hoite thakbe)

# app run korar command 

    node ./dist/app/app.js
    node ./dist/app/server.js

# server restart every changeing
    npm i -D nodemon
    npm i -g nodemon 

    ==== start command ===== 
    nodemon ./dist/app/server.js

# package.json script write 
    "start": "nodemon ./dist/app/server.js",

# mongodb install command
    npm i mongodb

# Localy mongoDB download and install all work 

    google search -> mongodb download -> msi type download
    normal install korte hobe 

    google search -> mongodb shell download -> msi type download
    normal install korte hobe 
    envernoment path set korte hobe 
    C:\Program Files\MongoDB\Server\8.0\bin

    google search -> 
    NoSQL Booster 

# mongoes work start 
    ==> first search diye side ta ber korte hobe , search dite hobe (mongoes) ta hole (Mongoose ODM v8.16.3) eita paoya jabe, this click. 
    ==> aktu niche (quick start guide) this click

    ==> uporer je likha gulo ache oi khan theke typescript, express, mongodb and mongoose gulo ke age install kore nite hobe. sathe are o kicho thakle oi gulo keo install kore nite hobe. 

    ==> ts node dev search kore (ts-node-dev) this click . terminal (npm i ts-node-dev) this install

    ==> mongoose documention ta valo kore porte hobe (mongoose-> Guides-> Schemas/ SchemaTypes etc.)

    
