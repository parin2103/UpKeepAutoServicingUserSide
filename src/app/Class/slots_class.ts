export class slot{

  public constructor(
    public slot_register_id: number,
    public vehicle_type: string,
    public service_type:number,
    public pickup_date: string,
    public requirment:number,
    public fk_emp_allot_id:number,
    public fk_user_id:number) {
  }

}
