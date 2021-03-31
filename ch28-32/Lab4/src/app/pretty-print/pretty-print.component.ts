import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-pretty-print',
  templateUrl: './pretty-print.component.html',
  styleUrls: ['./pretty-print.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PrettyPrintComponent implements OnInit {
  @Input()
  jsonData: any;
  formatJson: string;

  constructor() {}

  ngOnInit(): void {
    this.prettyPrint(this.jsonData);
  }

  replacer(match, pIndent, pKey, pVal, pEnd): string {
    const key = '<span class=json-key>';
    const val = '<span class=json-value>';
    const str = '<span class=json-string>';
    let r = pIndent || '';
    if (pKey) {
      r = r + key + pKey.replace(/[": ]/g, '') + '</span>: ';
    }
    if (pVal) {
      r = r + (pVal[0] === '"' ? str : val) + pVal + '</span>';
    }
    return r + (pEnd || '');
  }

  prettyPrint(obj): void {
    const jsonLine = /^( *)("[\w]+": )?("[^"]*"|[\w.+-]*)?([,[{])?$/gm;
    this.formatJson = JSON.stringify(obj, null, 3)
      .replace(/&/g, '&amp;')
      .replace(/\\"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(jsonLine, this.replacer);
  }
}
