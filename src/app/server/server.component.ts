import { Component } from '@angular/core';

@Component ({
    selector: 'app-server-selector',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent {
    server_id: number = 454654654;
    server_name: string = 'name from property';

    getServerStatus() {
       return this.server_id
    }
}