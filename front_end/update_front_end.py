import yaml
import json, shutil, os

def copy_folders_to_front_end(src, dest):
    if os.path.exists(dest):
        shutil.rmtree(dest)
    shutil.copytree(src, dest)


# Sending the front end the backend config as JSON format
with open(r"C:\Rust-Crypto\AAT\brownie-config.yaml", "r") as brownie_config:
    config_dict = yaml.load(brownie_config, Loader=yaml.FullLoader)
    with open(
        r"C:\Rust-Crypto\AAT_Front_End\front_end\src\brownie-config.json", "w"
    ) as brownie_config_json:
        json.dump(config_dict, brownie_config_json)
print("Front End Updated")

copy_folders_to_front_end(r"C:\Rust-Crypto\AAT\build",r"C:\Rust-Crypto\AAT_Front_End\front_end\src\chain-info")
