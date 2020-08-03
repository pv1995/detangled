# Quasar App (event_planner)

This is a app developed soley for the purpose of an interview.

## Install the dependencies
```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).



#### Problem statement

We have a backend with a single API call which returns a list of events. You can see and consume data at

http://detangled.in/develop/fc40f674-ccea-4045-acba-bc86aeb8f81b/events

This is a testing URL you can use for your test project development. You would 
be doing CRUD operations against this URL. N.B. I am using a new production deployment setup so there's a chance that the service fails or that you have data loss. If either thing happens, just email me and I'll reset all your data and restart the service.

The URL returns a list of `event` items. Each item has the following fields. 
id: number 
destination: string 
start: datetime 
duration: number 
comments: string

Standard REST phrasing is possible. For example making a DELETE call against http://detangled.in/develop/fc40f674-ccea-4045-acba-bc86aeb8f81b/events/:id would result in the server deleting this data.

You have to build a two column view. The left column of the view shows the list of `trip` objects as cards. The card title is the `destination` string and contents of the card are the start date, duration and comments. Only the destination and comments are editable in the card. Edits made to the items are persisted to the backend by making PUT calls against the URL with the relevant ID suffixed. The card should be deletable (trash-can icon for example) and should correspondingly delete the trip from the backend using the URL as described above.

The right side of the view shows a scrollable calendar. The dates on the calendar corresponding to a `trip` are highlighted with a background color.

You may use any styling apart from the requirements above. This position will require you to drive some UI design choices so we would like to see some of the choices you like to make.

Submission requirements

You may use any stack for the development. Deploy a running version on a publicly accessible URL or on sharing site like netlify and share the code by uploading to a source repo and sharing the link. We care about correctness but code quality is almost equally important.

Hoping to hear back from you soon.