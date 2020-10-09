import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: "temperature-converter",
  templateUrl: "./temperatureConverter.component.html",
  styleUrls: ["./temperatureConverter.component.scss"],
})
export class TemperatureConverter implements OnInit {
  formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    // C = (F − 32) × 5/9
    // F = C*9/5 + 32
    this.formGroup = this.formBuilder.group({
      c: [""],
      f: [""],
    });

    this.formGroup.valueChanges.subscribe((values) => {
      const { f, c } = values;
      const newF = c ? (c * (9 / 5) + 32).toFixed(1) : "";
      const newC = f ? ((f - 32) * (5 / 9)).toFixed(1) : "";

      this.formGroup.get("f").setValue(newF);
      this.formGroup.get("c").setValue(newC);
    });
  }
}
