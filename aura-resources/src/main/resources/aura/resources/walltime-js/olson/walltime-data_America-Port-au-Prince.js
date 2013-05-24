/*
 * Copyright (C) 2013 salesforce.com, inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
(function() {
    window.WallTime || (window.WallTime = {});
    window.WallTime.data = {
        rules: {"Haiti":[{"name":"Haiti","_from":"1983","_to":"only","type":"-","in":"May","on":"8","at":"0:00","_save":"1:00","letter":"D"},{"name":"Haiti","_from":"1984","_to":"1987","type":"-","in":"Apr","on":"lastSun","at":"0:00","_save":"1:00","letter":"D"},{"name":"Haiti","_from":"1983","_to":"1987","type":"-","in":"Oct","on":"lastSun","at":"0:00","_save":"0","letter":"S"},{"name":"Haiti","_from":"1988","_to":"1997","type":"-","in":"Apr","on":"Sun>=1","at":"1:00s","_save":"1:00","letter":"D"},{"name":"Haiti","_from":"1988","_to":"1997","type":"-","in":"Oct","on":"lastSun","at":"1:00s","_save":"0","letter":"S"},{"name":"Haiti","_from":"2005","_to":"2006","type":"-","in":"Apr","on":"Sun>=1","at":"0:00","_save":"1:00","letter":"D"},{"name":"Haiti","_from":"2005","_to":"2006","type":"-","in":"Oct","on":"lastSun","at":"0:00","_save":"0","letter":"S"},{"name":"Haiti","_from":"2012","_to":"only","type":"-","in":"Mar","on":"Sun>=8","at":"2:00","_save":"1:00","letter":"D"},{"name":"Haiti","_from":"2012","_to":"only","type":"-","in":"Nov","on":"Sun>=1","at":"2:00","_save":"0","letter":"S"}]},
        zones: {"America/Port-au-Prince":[{"name":"America/Port-au-Prince","_offset":"-4:49:20","_rule":"-","format":"LMT","_until":"1890"},{"name":"America/Port-au-Prince","_offset":"-4:49","_rule":"-","format":"PPMT","_until":"1917 Jan 24 12:00"},{"name":"America/Port-au-Prince","_offset":"-5:00","_rule":"Haiti","format":"E%sT","_until":""}]}
    };
    window.WallTime.autoinit = true;
}).call(this);