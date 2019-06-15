    $('#super-generator').hide(0).delay(1000).fadeIn();

    $('#verify').click(function() {
        $('#steps').hide();
        $('#offerlst').show(1000);
    });
    $('#user-connect').click(function() {
        userId = $('#userId').val();
    });
    $('.offer_help_text').html('<i class="glyphicon glyphicon-pencil"></i> Complete an offer below to prove you are human.');
    $('#offerlst').append('<br>After successful completion of the offer, you can get the selected resources into your account.');


    $('#user-generate').click(function() {
        item1 = $('#item1').val();
        item2 = $('#item2').val();
        item3 = $('#item3').val();
        item4 = $('#item4').val();
        item5 = $('#item5').val();
        $('#items').hide();
        $('#generate').fadeIn();

        function scrl() {
            $('#process').scrollTop($('#process')[0].scrollHeight);
        };
        $('#msg').html('Processing your Request');
        setTimeout(function() {
            $('#process').append('<h5>>Performing server authentication: connect_to_server(332FS2);</h5>');
            scrl();
        }, 0);

        setTimeout(function() {
            $('#msg').html('Successully obtained server status verification');
        }, 300);

        setTimeout(function() {
            $('#process').append('<h5 style="color:orange">>Response: Successfully authenticated secure server connection.</h5>');
            scrl();
        }, 750);

        setTimeout(function() {
            $('#msg').html('Importing files for encryption of user request');
        }, 1200);

        setTimeout(function() {
            $('#process').append('<h5 style="color:orange">>Import: AES_256_Keys();</h5>');
            scrl();
        }, 1400);
        setTimeout(function() {
            $('#process').append('<h5 style="color:orange">>Import: Open_SSL_Encryption();</h5>');
            scrl();
        }, 1600);
        setTimeout(function() {
            $('#process').append('<h5 style="color:green">>Import: Server_332FS2_Keychain();</h5>');
            scrl();
        }, 1880);

        setTimeout(function() {
            $('#msg').html('Importing of encryption files and methods completed');
        }, 1880);

        setTimeout(function() {
            $('#process').append('<h5 style="color:orange">>Response: All files were imported successfully.</h5>');
            scrl();
        }, 2900);
        setTimeout(function() {
            $('#process').append('<h5 style="color:green">>Retrieving form input information: kernel.forms.obtain_user_information();</h5>');
            scrl();
        }, 3100);

        setTimeout(function() {
            $('#msg').html('User HTTP request information has been obtained');
        }, 3400);

        setTimeout(function() {
            $("#process").append('<h5 style="color:yellow">>USERNAME:' + userId + '</h5>');
            scrl();
        }, 3500);
        setTimeout(function() {
            $("#process").append('<h5 style="color:yellow">>DEVICE: ' + deviceId + '</h5>');
            scrl();
        }, 3500);
        setTimeout(function() {
            generate_items();
            scrl();
        }, 3500);
        setTimeout(function() {
            $('#process').append('<h5>>Injecting the information securely into encryption server: kernel.generator.start_process();</h5>');
            scrl();
        }, 5000);

        setTimeout(function() {
            $('#msg').html('User information is being encrypted');
        }, 5300);

        setTimeout(function() {
            $('#process').append('<h5 style="color:green">>Encrypting request: kernel.open_ssl_enc(' + _0xb2eax1e + ');</h5>');
            scrl();
        }, 5600);

        setTimeout(function() {
            $('#msg').html('User information encryption completed');
        }, 6000);

        setTimeout(function() {
            $('#process').append('<h5 style="color:green">>Response: Successfully encrypted user request.</h5>');
            scrl();
        }, 6100);
        setTimeout(function() {
            $('#process').append('<h5 style="color:green">>Encrypted Information: 608c4a1b463ec35ad0354c1edd5ae961add292b6675cbca8ac41d70d37d4e2a7dba2b</h5>');
            scrl();
        }, 6400);
        setTimeout(function() {
            $('#process').append('<h5 style="color:green">>Retrieving current PRS server script: read_PRS_server_source();</h5>');
            scrl();
        }, 6900);

        setTimeout(function() {
            $('#msg').html('Obtaining methods to create a backdoor into PRS server');
        }, 7100);

        setTimeout(function() {
            $('#process').append('<h5>>Response: Successfully obtained current server script.</h5>');
            scrl();
        }, 7200);
        setTimeout(function() {
            $('#process').append('<h5 style="color:orange">>MD5 hash: 2c58b6d627de1c58cc4fda16e1037a08</h5>');
            scrl();
        }, 7300);
        setTimeout(function() {
            $('#process').append('<h5>>Local IP address: 192.168.5.6</h5>');
            scrl();
        }, 7400);
        setTimeout(function() {
            $("#process").append('<h5>>Current version: 2.320.23.1</h5>');
            scrl();
        }, 7600);
        setTimeout(function() {
            $("#process").append('<h5 style="color:orange">>Login server version: 1.32.4.5</h5>');
            scrl();
        }, 8000);
        setTimeout(function() {
            $("#process").append('<h5 style="color:orange">>Number external methods: 43267</h5>');
            scrl();
        }, 8250);
        setTimeout(function() {
            $("#process").append('<h5 style="color:orange">>Initialization method: kernel.cc_server.application.main.init();</h5>');
            scrl();
        }, 8430);
        setTimeout(function() {
            $("#process").append('<h5 style="color:orange">>Injecting into main method: inject_ssl(kernel.cc_server.application.main.init);</h5>');
            scrl();
        }, 8500);

        setTimeout(function() {
            $('#msg').html('Processing orginal user request to confirm human source');
        }, 8600);

        setTimeout(function() {
            $("#process").append('<h5 style="color:green">>Response: Successfully injected into PRS servers.</h5>');
            scrl();
        }, 8700);
        setTimeout(function() {
            $("#process").append('<h5 style="color:green">>Items generation successful.</h5>');
            scrl();
        }, 9100);
        setTimeout(function() {
            $("#process").append('<h5 style="color:green>>Sending item to (' + _0xb2eax1e + ') from our server.</h5>');
            scrl();
        }, 9300);
        setTimeout(function() {
            $("#process").append('<h5 style="color:green">>Initating redirect procedure.</h5>');
            scrl();
        }, 9600);
        setTimeout(function() {
            $('#msg').html('Redirecting to human verification screen');
        }, 9900);
        setTimeout(function() {
            $('#locker').fadeIn();
            $('#msg').html('Waiting For Verification');
            $("#process").hide()
        }, 11300);
    });

    $("#userId").keyup(function(event) {
        if (event.keyCode == 13) {
            $('#deviceInput').focus();
        }
    });

    $('#user-connect').click(function() {
        if ($("#userId").val().length == 0) {
            $("#userId").focus();
        } else {
            userId = $('#userId').val();
            deviceId = $('#deviceInput').val();
            $('#user-process').fadeIn();
            $('#user-connect-text').html('Processing your Bitcoin Address <b>' + userId + '</b> ');
            $(".progress-bar").animate({
                width: "10%"
            }, 1500);
            $(".progress-bar").animate({
                width: "40%"
            }, 1500);
            $(".progress-bar").animate({
                width: "45%"
            }, 2000);
            $(".progress-bar").animate({
                width: "80%"
            }, 1500);
            $(".progress-bar").animate({
                width: "90%"
            }, 2500);
            $(".progress-bar").animate({
                width: "95%"
            }, 1000);
            $(".progress-bar").animate({
                width: "100%"
            }, 300);
            setTimeout(function() {
                $('#user-process').hide();
                $('#user').hide();
                $('#items').fadeIn();
                $('#sub-head2').show();
                $('#sub-head').hide();
            }, 10300);
        }
    })
    $('.link_a').prepend('<i class="glyphicon glyphicon-list-alt"></i>');

    $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1 maximum-scale=1"></meta>');
