.\.venv\Scripts\Activate
python -m pip install --upgrade pip
pip install -r requirements.txt
reflex init
reflex export --frontend-only
rmdir /s /q public
Expand-Archive -Path .\frontend.zip -DestinationPath .\public
Remove-Item -Path .\frontend.zip
deactivate

