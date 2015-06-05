$(function() {
		$( "#metric" ).autocomplete({
			source: function( request, response ) {
				$.ajax({
					url: "/sug",
					dataType: "json",
					data: {
						type: "metrics",
                           q: $("#metric").val()
					},
					success: function( data ) {
						response(data);
					}
				});
			}
	});

//tag1
		$("#tagk1").autocomplete({
			source: function( request, response ) {
				$.ajax({
					url: "/sug",
					dataType: "json",
					data: {
						type: "tagk",
                           q: $("#tagk1").val()
					},
					success: function( data ) {
						response(data);
					}
				});
			}
	});
		$( "#tagv1" ).autocomplete({
			source: function( request, response ) {
				$.ajax({
					url: "/sug",
					dataType: "json",
					data: {
						type: "tagv",
                           q: $("#tagv1").val()
					},
					success: function( data ) {
						response(data);
					}
				});
			}
	});
//tag2
		$("#tagk2").autocomplete({
			source: function( request, response ) {
				$.ajax({
					url: "/sug",
					dataType: "json",
					data: {
						type: "tagk",
                           q: $("#tagk2").val()
					},
					success: function( data ) {
						response(data);
					}
				});
			}
	});
		$( "#tagv2" ).autocomplete({
			source: function( request, response ) {
				$.ajax({
					url: "/sug",
					dataType: "json",
					data: {
						type: "tagv",
                           q: $("#tagv2").val()
					},
					success: function( data ) {
						response(data);
					}
				});
			}
	});
//tag3
		$("#tagk3").autocomplete({
			source: function( request, response ) {
				$.ajax({
					url: "/sug",
					dataType: "json",
					data: {
						type: "tagk",
                           q: $("#tagk3").val()
					},
					success: function( data ) {
						response(data);
					}
				});
			}
	});
		$( "#tagv3" ).autocomplete({
			source: function( request, response ) {
				$.ajax({
					url: "/sug",
					dataType: "json",
					data: {
						type: "tagv",
                           q: $("#tagv3").val()
					},
					success: function( data ) {
						response(data);
					}
				});
			}
	});


		$( "#Rmetric" ).autocomplete({
			source: function( request, response ) {
				$.ajax({
					url: "/sug",
					dataType: "json",
					data: {
						type: "metrics",
                           q: $("#metric").val()
					},
					success: function( data ) {
						response(data);
					}
				});
			}
	});

//tag1
		$("#Rtagk1").autocomplete({
			source: function( request, response ) {
				$.ajax({
					url: "/sug",
					dataType: "json",
					data: {
						type: "tagk",
                           q: $("#tagk1").val()
					},
					success: function( data ) {
						response(data);
					}
				});
			}
	});
		$( "#Rtagv1" ).autocomplete({
			source: function( request, response ) {
				$.ajax({
					url: "/sug",
					dataType: "json",
					data: {
						type: "tagv",
                           q: $("#tagv1").val()
					},
					success: function( data ) {
						response(data);
					}
				});
			}
	});
//tag2
		$("#Rtagk2").autocomplete({
			source: function( request, response ) {
				$.ajax({
					url: "/sug",
					dataType: "json",
					data: {
						type: "tagk",
                           q: $("#tagk2").val()
					},
					success: function( data ) {
						response(data);
					}
				});
			}
	});
		$( "#Rtagv2" ).autocomplete({
			source: function( request, response ) {
				$.ajax({
					url: "/sug",
					dataType: "json",
					data: {
						type: "tagv",
                           q: $("#tagv2").val()
					},
					success: function( data ) {
						response(data);
					}
				});
			}
	});
//tag3
		$("#Rtagk3").autocomplete({
			source: function( request, response ) {
				$.ajax({
					url: "/sug",
					dataType: "json",
					data: {
						type: "tagk",
                           q: $("#tagk3").val()
					},
					success: function( data ) {
						response(data);
					}
				});
			}
	});
		$( "#Rtagv3" ).autocomplete({
			source: function( request, response ) {
				$.ajax({
					url: "/sug",
					dataType: "json",
					data: {
						type: "tagv",
                           q: $("#tagv3").val()
					},
					success: function( data ) {
						response(data);
					}
				});
			}
	});

});
