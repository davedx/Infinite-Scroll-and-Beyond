"use strict";

function Content() {

	this.index = 0;
	this.container = $('#content'); // change this to your content container
	this.template = $('#tpl_content').html(); // change this to your template
	this.path = '/fetch/'; // must take following form URL: /fetch/offset/limit

	// parse the template for the content
	this.parse = function(data) {
		var str = this.template;
		var m = str.match(/##([\w]+)##/g);
		for(var i=0; i<m.length; i++) {
			var mv = m[i].substring(2, m[i].length-2);
			str = str.replace(m[i], data[mv]);
		}
		return str;
	};

	this.fetchNext = function(limit) {
		this.fetch(this.index, limit);
	};

	this.fetch = function(offset, limit) {
		var path = this.path+offset+'/'+limit;
		var me = this;
		$.ajax({
			url: path
		}).done(function(r) {
			var json = JSON.parse(r);
			me.index += json.length;
			for(var i=0; i<json.length; i++) {
				try {
					var html = me.parse(json[i]);
					me.container.append(html);
				} catch (e) {
				}
			}
		});
	};
}

$(function() {
	var content = new Content();
	var lastHeightFetched = 0;

	content.fetchNext(10); // fetch first 10 at page load

	$(window).scroll(function() {
		var diff = $(document).height() - $(document).scrollTop() - $(window).height();
		// fetch next content if we're near the bottom AND
		// if the total height isn't what it was last time we fired it -
		// this prevents multiple fetch() firing before DOM is appended.
		if(diff < $(window).height() &&
			$(document).height() != lastHeightFetched) {
			content.fetchNext(10);
			lastHeightFetched = $(document).height();
		}
	});
});
