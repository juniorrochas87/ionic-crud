import { Injectable } from '@angular/core';

let config_key_name = "config"

@Injectable()
export class ConfigProvider {

  public config = {
    showSlide: false,
    username: "",
    senha: ""
  }

  constructor() {

  }

  //recupera os dados do local Storage
  getConfigData(): any {
    return localStorage.getItem(config_key_name);
  }

  //Para realizar a gravação do Local Storage
  setConfigData(showSlide?: boolean, username?: string, senha?: string) {
    let config = {
      showSlide: false,
      username: "",
      senha: ""
    };

    if (showSlide){
      config.showSlide = showSlide;
    }

    if (username){
      config.username = username; 
    }

    if (senha){
      config.senha = senha;
    }
    localStorage.setItem(config_key_name, JSON.stringify(config));
  }
}
