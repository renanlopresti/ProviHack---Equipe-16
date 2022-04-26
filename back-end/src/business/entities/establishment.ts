export class Establishment {
 constructor(
  public readonly id:string,
  public readonly name:string,
  public readonly estate: string,
  public readonly city:string,
  public readonly img:string,
  public readonly cep:string,
  public readonly tel:string,
  public readonly workingTime:string,
  public readonly discard:string[],
  public readonly howToDiscard:string,
  public readonly howDoesDiscart:string

 ) {}
 
}

export interface EstablishmentInputDTO {
 name:string,
 estate:string,
 city:string,
 img:string,
 cep:string,
 tel:string,
 workingTime:string,
 discard:string[],
 howToDiscard:string,
 howDoesDiscart:string
}

export interface DiscardInputDTO {
 id:string,
 name:string
}

export interface EstabDiscaDTO {
 id:string,
 id_establishment:string,
 id_discard:string
}