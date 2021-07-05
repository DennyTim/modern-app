Для создания необходимо сделать:

```shell
  nx g @nrwl/angular:lib ui-component
```

После создания ui-lib необходимо сделать следующее:

добавить в раздел architect angular.json
```        
  "build": {
    "options": {
      "stylePreprocessorOptions": {
        "includePaths": ["ws-style"]
      }
    }
  },
```

добавить теги в nx.json
```
"tags": ["type:lib", "scope:ui-lib"]
```
