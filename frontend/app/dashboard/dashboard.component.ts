import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../api.service';
import { interval } from 'rxjs';

const DEFAULT_TEMPLATE = `Hello {{ name }},

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor \
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud \
exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute \
irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla \
pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia \
deserunt mollit anim id est laborum.

Thx, bai!
Aadu Assert
`

const DATA_VERSION = 1;


@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
	public savedAt: String = '';
	public sending: Boolean = false;
	public errorMsg: String = '';
	public sent: Array<string> = [];
	public failed: Array<string> = [];

	public subject: String = '';
	public params: Array<Object> = [
		{
			name: 'name',
		}
	];
	public emails: Array<Object> = [];

	private autosave: any;
	private templateTextEditor: any = null;

	constructor(private api: ApiService, private modalService: NgbModal) { }

	async ngOnInit() {
		this.templateTextEditor = new (<any>window).Quill('#template-text', {
			modules: {
				toolbar: [
					[{ header: [1, 2, false] }],
					['bold', 'italic', 'underline'],
					['link', 'code-block']
				]
			},
			placeholder: 'Template text goes here...',
			theme: 'snow'
		});

		this.templateTextEditor.setText(DEFAULT_TEMPLATE);

		this.deserialize();

		let scope = this;
		this.autosave = interval(1000);
		this.autosave.subscribe(function() {
			scope.serialize();
		});
	}

	addVariable(inputElement: any) {
		let name = inputElement.value.trim();
		if (name.length == 0)
			return;
		inputElement.value = '';
		for (let param of this.params) {
			if ((<any>param).name == name)
				return;
		}
		this.params.push({
			name
		});
	}

	removeVariable(index: number) {
		this.params.splice(index, 1);
	}

	addEmail(inputElement: any, emailParams: any) {
		let paramElements = emailParams.querySelectorAll('input')
		let params = [];
		for (let element of paramElements) {
			params.push({
				name: element.name.trim(),
				value: element.value.trim(),
			});
			element.value = '';
		}

		let email = inputElement.value.trim();
		inputElement.value = '';
		for (let email of this.emails) {
			if ((<any>email).email == email)
				return;
		}
		this.emails.push({
			email,
			params
		});
	}

	removeEmail(index: number) {
		this.emails.splice(index, 1);
	}

	serialize() {
		let data = {
			version: DATA_VERSION,
			templateText: this.templateTextEditor.getContents(),
			templateHTML: this.templateTextEditor.root.innerHTML,
			subject: this.subject,
			params: this.params,
			emails: this.emails,
		};
		localStorage.setItem('state', JSON.stringify(data));

		this.savedAt = 'Autosaved at ' + (new Date());

		return data;
	}

	deserialize() {
		let data = localStorage.getItem('state');
		if (!data)
			return;

		data = JSON.parse(data);

		if (typeof((<any>data).templateText) == 'object') {
			this.templateTextEditor.setContents((<any>data).templateText);
		}
		else {
			this.templateTextEditor.setText((<any>data).templateText);
		}
		this.subject = (<any>data).subject;
		this.params.length = 0;
		for (let param of (<any>data).params) {
			this.params.push(param);
		}
		this.emails.length = 0;
		for (let email of (<any>data).emails) {
			this.emails.push(email);
		}
		return data;
	}

	async send(loginUser: any, loginPass: any) {
		this.errorMsg = '';
		this.sent.length = 0;
		this.failed.length = 0;

		let data = this.serialize();
		try {
			this.sending = true;
			let result = await this.api.post(
				'send',
				{
					json: JSON.stringify(data),
					username: loginUser.value.trim(),
					password: loginPass.value.trim(),
				}).toPromise();

			this.sent.length = 0;
			for (let email of (<any>result).sent) {
				this.sent.push(email);
			}

			this.failed.length = 0;
			for (let email of (<any>result).failed) {
				this.failed.push(email);
			}
		}
		catch (err) {
			console.error(err);
			this.errorMsg = err.error;
		}
		this.sending = false;
	}

	canSend(loginUser: any, loginPass: any) {
		return !this.sending && loginUser.value.length > 0 && loginPass.value.length > 0;
	}
}
