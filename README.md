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

