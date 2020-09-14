<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="{{  asset('css/app.css')  }}">
</head>
<body>
<div id="app">
    <v-app>
        <v-main>
            <v-card
                    color="grey lighten-4"
                    flat
                    height="200px"
                    tile
            >
                <v-toolbar dense>
                    <v-app-bar-nav-icon></v-app-bar-nav-icon>

                    <v-toolbar-title>Title</v-toolbar-title>

                    <v-spacer></v-spacer>

                    <v-btn icon>
                        <v-icon>mdi-magnify</v-icon>
                    </v-btn>

                    <v-btn icon>
                        <v-icon>mdi-heart</v-icon>
                    </v-btn>

                    <v-btn icon>
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </v-toolbar>
            </v-card>
        </v-main>
    </v-app>
</div>
<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
