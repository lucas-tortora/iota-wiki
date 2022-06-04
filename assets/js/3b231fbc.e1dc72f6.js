"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[89626],{22494:function(e,a,t){t.r(a),t.d(a,{assets:function(){return m},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=t(87462),r=t(63366),o=(t(67294),t(3905)),i=["components"],l={description:"Node operators who wish to have more insights into what is happening within their node have the option to enable a Prometheus exporter plugin that gathers important metrics about their node. To visualize these metrics, a Grafana Dashboard is utilized.",image:"/img/logo/goshimmer_light.png",keywords:["monitoring","dashboard","prometheus","grafana","set up","VPS"]},s="Setting up Monitoring Dashboard",p={unversionedId:"tutorials/monitoring",id:"tutorials/monitoring",title:"Setting up Monitoring Dashboard",description:"Node operators who wish to have more insights into what is happening within their node have the option to enable a Prometheus exporter plugin that gathers important metrics about their node. To visualize these metrics, a Grafana Dashboard is utilized.",source:"@site/content/build/goshimmer/develop/documentation/docs/tutorials/monitoring.md",sourceDirName:"tutorials",slug:"/tutorials/monitoring",permalink:"/goshimmer/tutorials/monitoring",draft:!1,editUrl:"https://github.com/iotaledger/goshimmer/edit/develop/documentation/content/build/goshimmer/develop/documentation/docs/tutorials/monitoring.md",tags:[],version:"current",frontMatter:{description:"Node operators who wish to have more insights into what is happening within their node have the option to enable a Prometheus exporter plugin that gathers important metrics about their node. To visualize these metrics, a Grafana Dashboard is utilized.",image:"/img/logo/goshimmer_light.png",keywords:["monitoring","dashboard","prometheus","grafana","set up","VPS"]},sidebar:"docs",previous:{title:"Create a Static Identity",permalink:"/goshimmer/tutorials/static_identity"},next:{title:"How to Send a Transaction",permalink:"/goshimmer/tutorials/send_transaction"}},m={},u=[{value:"Motivation",id:"motivation",level:2},{value:"Docker",id:"docker",level:2},{value:"Binary",id:"binary",level:2},{value:"GoShimmer Configuration",id:"goshimmer-configuration",level:3},{value:"Install and Configure Prometheus",id:"install-and-configure-prometheus",level:3},{value:"Prometheus as a standalone app",id:"prometheus-as-a-standalone-app",level:4},{value:"Prometheus as a system service (Linux)",id:"prometheus-as-a-system-service-linux",level:4},{value:"Install and Configure Grafana",id:"install-and-configure-grafana",level:3},{value:"Grafana as standalone app",id:"grafana-as-standalone-app",level:4},{value:"Grafana as a system service (Linux)",id:"grafana-as-a-system-service-linux",level:4},{value:"Grafana config via GUI",id:"grafana-config-via-gui",level:4}],h={toc:u};function d(e){var a=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setting-up-monitoring-dashboard"},"Setting up Monitoring Dashboard"),(0,o.kt)("h2",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,"GoShimmer is shipped with its internal node dashboard that you can reach at ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1:8081")," by default. While this dashboard provides some basic metrics information, its main functionality is to provide a graphical interface to interact with your node."),(0,o.kt)("p",null,"Node operators who wish to have more insights into what is happening within their node have the option to enable a ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus")," exporter plugin that gathers important metrics about their node. To visualize these metrics, a ",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/oss/grafana/"},"Grafana Dashboard")," is utilized."),(0,o.kt)("h1",{id:"setting-up-run-goshimmer-from-a-vps"},"Setting Up (Run GoShimmer From a VPS)"),(0,o.kt)("p",null,"To enable the ",(0,o.kt)("strong",{parentName:"p"},"Monitoring Dashboard")," for a GoShimmer node running from a VPS as described ",(0,o.kt)("a",{parentName:"p",href:"/goshimmer/tutorials/setup"},"here"),", you need to carry out some additional steps."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Edit ",(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose.yml"),"\nTODO"),(0,o.kt)("li",{parentName:"ol"},"Create Prometheus config.\nTODO"),(0,o.kt)("li",{parentName:"ol"},"Create Grafana config.\nTODO"),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose up"),".\nTODO")),(0,o.kt)("h1",{id:"setting-up-run-goshimmer-from-your-home-machine"},"Setting Up (Run GoShimmer From Your Home Machine)"),(0,o.kt)("p",null,"Depending on how you run your GoShimmer node, there are different ways to set up the ",(0,o.kt)("strong",{parentName:"p"},"Monitoring Dashboard"),"."),(0,o.kt)("h2",{id:"docker"},"Docker"),(0,o.kt)("p",null,"One of the easiest ways to run a node is to use ",(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker"),". To automatically launch GoShimmer and the Monitoring Dashboard with docker, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Install docker"),". On Linux, make sure you install both the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"Docker Engine")," and ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"Docker Compose"),"."),(0,o.kt)("li",{parentName:"ol"},"Clone the GoShimmer repository.",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ git clone git@github.com:iotaledger/goshimmer.git\n"))),(0,o.kt)("li",{parentName:"ol"},"Create a ",(0,o.kt)("inlineCode",{parentName:"li"},"config.json")," from the provided ",(0,o.kt)("inlineCode",{parentName:"li"},"config.default.json"),".",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd goshimmer\n$ cp config.default.json config.json\n")),"Make sure, that following entry is present in ",(0,o.kt)("inlineCode",{parentName:"li"},"config.json"),":",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "prometheus": {\n    "bindAddress": "127.0.0.1:9311"\n  }\n}\n'))),(0,o.kt)("li",{parentName:"ol"},"From the root of the repo, start GoShimmer with:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker-compose up\n")))),(0,o.kt)("p",null,"You should be able to reach the Monitoring Dashboard via browser at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000"},"localhost:3000"),". Default login credentials are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"username")," : admin"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"password")," : admin")),(0,o.kt)("p",null,"After initial login, you will be prompted to change your password.\nYou can experiment with the dashboard, change layout, add panels and discover metrics. Your changes will be saved into a Grafana database located in the repo at ",(0,o.kt)("inlineCode",{parentName:"p"},"tools/monitoring/grafana/grafana.db"),"."),(0,o.kt)("h2",{id:"binary"},"Binary"),(0,o.kt)("p",null,"If you run the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/goshimmer/releases"},"released binaries"),", or build GoShimmer from source, you need to setup Prometheus and Grafana separately, furthermore, you have to configure GoShimmer to export data."),(0,o.kt)("h3",{id:"goshimmer-configuration"},"GoShimmer Configuration"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Make sure that the ",(0,o.kt)("inlineCode",{parentName:"li"},"prometheus.bindAddress")," config parameter is set in your ",(0,o.kt)("inlineCode",{parentName:"li"},"config.json"),":",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'  {\n     "prometheus": {\n       "bindAddress": "127.0.0.1:9311"\n     }\n   }\n'))),(0,o.kt)("li",{parentName:"ol"},"Make sure, that the ",(0,o.kt)("inlineCode",{parentName:"li"},"prometheus")," plugin is enabled in your ",(0,o.kt)("inlineCode",{parentName:"li"},"config.json"),":",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "node": {\n    "disablePlugins": [\n      \n    ],\n    "enablePlugins": [\n      "prometheus"\n    ]\n  }\n}\n')))),(0,o.kt)("h3",{id:"install-and-configure-prometheus"},"Install and Configure Prometheus"),(0,o.kt)("p",null,"First, we take a look on how to configure and run Prometheus as a standalone application. Then, we setup a Linux system service that automatically runs Prometheus in the background."),(0,o.kt)("h4",{id:"prometheus-as-a-standalone-app"},"Prometheus as a standalone app"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://prometheus.io/download/"},"Download")," the latest release of Prometheus for your system."),(0,o.kt)("li",{parentName:"ol"},"Unpack the downloaded file:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ tar xvfz prometheus-*.tar.gz\n$ cd prometheus-*\n"))),(0,o.kt)("li",{parentName:"ol"},"Create a ",(0,o.kt)("inlineCode",{parentName:"li"},"prometheus.yml")," in the unpacked directory with the following content:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"scrape_configs:\n    - job_name: goshimmer_local\n      scrape_interval: 5s\n      static_configs:\n      - targets:\n        # goshimmer prometheus plugin export\n        - 127.0.0.1:9311\n"))),(0,o.kt)("li",{parentName:"ol"},"Start Prometheus from the unpacked folder:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# By default, Prometheus stores its database in ./data (flag --storage.tsdb.path).\n$ ./prometheus --config.file=prometheus.yml\n"))),(0,o.kt)("li",{parentName:"ol"},"You can access the prometheus server at ",(0,o.kt)("a",{parentName:"li",href:"http://localhost:9090"},"localhost:9090"),"."),(0,o.kt)("li",{parentName:"ol"},"(Optional) Prometheus server is running, but observe that ",(0,o.kt)("a",{parentName:"li",href:"http://localhost:9090/targets"},"localhost:9090/targets")," shows the target being ",(0,o.kt)("inlineCode",{parentName:"li"},"DOWN"),". Run GoShimmer with the configuration from the previous stage, and you will soon see the ",(0,o.kt)("inlineCode",{parentName:"li"},"goshimmer_local")," target being ",(0,o.kt)("inlineCode",{parentName:"li"},"UP"),".")),(0,o.kt)("h4",{id:"prometheus-as-a-system-service-linux"},"Prometheus as a system service (Linux)"),(0,o.kt)("p",null,"Note: you have to have root privileges with your user to carry out the following steps."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a Prometheus user, directories, and set this user as the owner of those directories."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo useradd --no-create-home --shell /bin/false prometheus\n$ sudo mkdir /etc/prometheus\n$ sudo mkdir /var/lib/prometheus\n$ sudo chown prometheus:prometheus /etc/prometheus\n$ sudo chown prometheus:prometheus /var/lib/prometheus\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download Prometheus source, extract and rename."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ wget https://github.com/prometheus/prometheus/releases/download/v2.19.1/prometheus-2.19.1.linux-amd64.tar.gz\n$ tar xvfz prometheus-2.19.1.linux-amd64.tar.gz\n$ mv prometheus-2.19.1.linux-amd64.tar.gz prometheus-files\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy Prometheus binaries to ",(0,o.kt)("inlineCode",{parentName:"p"},"/bin")," and change their ownership"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo cp prometheus-files/prometheus /usr/local/bin/\n$ sudo cp prometheus-files/promtool /usr/local/bin/\n$ sudo chown prometheus:prometheus /usr/local/bin/prometheus\n$ sudo chown prometheus:prometheus /usr/local/bin/promtool\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy Prometheus console libraries to ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc")," and change their ownership."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo cp -r prometheus-files/consoles /etc/prometheus\n$ sudo cp -r prometheus-files/console_libraries /etc/prometheus\n$ sudo chown -R prometheus:prometheus /etc/prometheus/consoles\n$ sudo chown -R prometheus:prometheus /etc/prometheus/console_libraries\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create Prometheus config file, define targets.\nTo create and open up the config file:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo nano /etc/prometheus/prometheus.yml\n")),(0,o.kt)("p",{parentName:"li"},"Put the following content into the file:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"scrape_configs:\n    - job_name: goshimmer_local\n      scrape_interval: 5s\n      static_configs:\n      - targets:\n        # goshimmer prometheus plugin export\n        - 127.0.0.1:9311\n")),(0,o.kt)("p",{parentName:"li"},"Save and exit the editor.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Change ownership of the config file."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo chown prometheus:prometheus /etc/prometheus/prometheus.yml\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a Prometheus service file."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo nano /etc/systemd/system/prometheus.service\n")),(0,o.kt)("p",{parentName:"li"},"Copy the following content into the file:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"[Unit]\nDescription=Prometheus GoShimmer Server\nWants=network-online.target\nAfter=network-online.target\n\n[Service]\nUser=prometheus\nGroup=prometheus\nType=simple\nExecStart=/usr/local/bin/prometheus \\\n    --config.file /etc/prometheus/prometheus.yml \\\n    --storage.tsdb.path /var/lib/prometheus/ \\\n    --web.console.templates=/etc/prometheus/consoles \\\n    --web.console.libraries=/etc/prometheus/console_libraries\n\n[Install]\nWantedBy=multi-user.target\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Reload ",(0,o.kt)("inlineCode",{parentName:"p"},"systemd")," service to register the prometheus service."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo systemctl daemon-reload\n$ sudo systemctl start prometheus\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check if the service is running."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo systemctl status prometheus\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You can access the prometheus server at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:9090"},"localhost:9090"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"(Optional) Prometheus server is running, but observe that ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:9090/targets"},"localhost:9090/targets")," shows the target being ",(0,o.kt)("inlineCode",{parentName:"p"},"DOWN"),". Run GoShimmer with the configuration from the previous stage, and you will soon see the ",(0,o.kt)("inlineCode",{parentName:"p"},"goshimmer_local")," target being ",(0,o.kt)("inlineCode",{parentName:"p"},"UP"),"."))),(0,o.kt)("p",null,"+1. When you want to stop the service, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo systemctl stop prometheus\n")),(0,o.kt)("p",null,"Prometheus now collects metrics from your node, but we need to setup Grafana to visualize the collected data."),(0,o.kt)("h3",{id:"install-and-configure-grafana"},"Install and Configure Grafana"),(0,o.kt)("p",null,"Head over to ",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/installation/"},"Grafana Documentation")," and install Grafana. For Linux, the OSS Release is recommended."),(0,o.kt)("h4",{id:"grafana-as-standalone-app"},"Grafana as standalone app"),(0,o.kt)("p",null,"Depending on where you install Grafana from, the configuration directories will change. For clarity, we will proceed with the binary install here."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/download"},"Download Grafana")," binary and extract it into a folder.\nFor example:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ wget https://dl.grafana.com/oss/release/grafana-7.0.4.linux-amd64.tar.gz\n$ tar -zxvf grafana-7.0.4.linux-amd64.tar.gz\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"We will need couple files from the GoShimmer repository. Here we suppose, that you have the repository directory ",(0,o.kt)("inlineCode",{parentName:"p"},"goshimmer")," on the same level as the extracted ",(0,o.kt)("inlineCode",{parentName:"p"},"grafana-7.0.4")," directory:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 grafana-7.0.4   \n\u2502   \u251c\u2500\u2500 bin       \n\u2502   \u251c\u2500\u2500 conf         \n\u2502   \u251c\u2500\u2500 LICENSE   \n\u2502   \u251c\u2500\u2500 NOTICE.md\n\u2502   \u251c\u2500\u2500 plugins-bundled\n\u2502   \u251c\u2500\u2500 public \n\u2502   \u251c\u2500\u2500 README.md\n\u2502   \u251c\u2500\u2500 scripts \n\u2502   \u2514\u2500\u2500 VERSIO\n\u251c\u2500\u2500 goshimmer               \n\u2502   \u251c\u2500\u2500 CHANGELOG.md\n\u2502   \u251c\u2500\u2500 client             \n\u2502   \u251c\u2500\u2500 config.default.json\n    ...\n")),(0,o.kt)("p",{parentName:"li"},"We copy a couple configuration files from the repository into Grafana's directory:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ cp -R goshimmer/tools/monitoring/grafana/dashboards/local_dashboard.json grafana-7.0.4/public/dashboards/\n$ cp goshimmer/tools/monitoring/grafana/provisioning/datasources/datasources.yaml grafana-7.0.4/conf/provisioning/datasources/datasources.yaml\n$ cp goshimmer/tools/monitoring/grafana/provisioning/dashboards/dashboards.yaml grafana-7.0.4/conf/provisioning/dashboards/dashboards.yaml\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run Grafana."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd grafana-7.0.4/bin\n$ ./grafana-server\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open Moitoring Dashboard at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000"},"localhost:3000"),"."))),(0,o.kt)("p",null,"Default login credentials are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"username")," : admin"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"password")," : admin")),(0,o.kt)("h4",{id:"grafana-as-a-system-service-linux"},"Grafana as a system service (Linux)"),(0,o.kt)("p",null,"Instead of running the ",(0,o.kt)("inlineCode",{parentName:"p"},"grafana-server")," app each time we can create a service that runs in the background."),(0,o.kt)("p",null,"When you install Grafana from"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://grafana.com/docs/grafana/latest/installation/debian/#install-from-apt-repository"},"APT repository")," or ",(0,o.kt)("inlineCode",{parentName:"li"},".deb")," ",(0,o.kt)("a",{parentName:"li",href:"https://grafana.com/docs/grafana/latest/installation/debian/#install-deb-package"},"package")," (Ubuntu or Debian),"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://grafana.com/docs/grafana/latest/installation/rpm/#install-from-yum-repository"},"YUM repository")," or ",(0,o.kt)("inlineCode",{parentName:"li"},".rpm")," ",(0,o.kt)("a",{parentName:"li",href:"https://grafana.com/docs/grafana/latest/installation/rpm/#install-with-rpm"},"package")," (CentOS, Fedora, OpenSuse, RedHat),")),(0,o.kt)("p",null,"then Grafana is configured to run as a system service without any modification. All you need to do is copy config files from the GoShimmer repository:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Copy ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/goshimmer/blob/develop/tools/monitoring/grafana/provisioning/datasources/datasources.yaml"},"datasource yaml config")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"/etc/grafana"),":\n(assuming you are at the root of the cloned GoShimmer repository)",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo cp tools/monitoring/grafana/provisioning/datasources/datasources.yaml /etc/grafana/provisioning/datasources\n"))),(0,o.kt)("li",{parentName:"ol"},"Copy ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/goshimmer/blob/develop/tools/monitoring/grafana/provisioning/dashboards/dashboards.yaml"},"dashboard yaml config")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"/etc/grafana"),":",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo cp tools/monitoring/grafana/provisioning/dashboards/dashboards.yaml /etc/grafana/provisioning/dashboards\n"))),(0,o.kt)("li",{parentName:"ol"},"Copy ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/goshimmer/blob/develop/tools/monitoring/grafana/dashboards/local_dashboard.json"},"GoShimmer Local Metrics")," dashboard to ",(0,o.kt)("inlineCode",{parentName:"li"},"/var/lib/grafana/"),":",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo cp -R tools/monitoring/grafana/dashboards /var/lib/grafana/\n"))),(0,o.kt)("li",{parentName:"ol"},"Reload daemon and start Grafana.",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo systemctl daemon-reload\n$ sudo systemctl start grafana-server\n"))),(0,o.kt)("li",{parentName:"ol"},"Open Moitoring Dashboard at ",(0,o.kt)("a",{parentName:"li",href:"http://localhost:3000"},"localhost:3000"),".")),(0,o.kt)("p",null,"Default login credentials are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"username")," : admin"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"password")," : admin")),(0,o.kt)("h4",{id:"grafana-config-via-gui"},"Grafana config via GUI"),(0,o.kt)("p",null,"If you successfully installed Grafana and would like to set it up using its graphical interface, here are the steps you need to take:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Run Grafana."),(0,o.kt)("li",{parentName:"ol"},"Open ",(0,o.kt)("a",{parentName:"li",href:"http://localhost:3000"},"localhost:3000")," in a browser window.\nDefault login credentials are:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"username")," : admin"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"password")," : admin"))),(0,o.kt)("li",{parentName:"ol"},"On the left side, open ",(0,o.kt)("strong",{parentName:"li"},"Configuration -> Data Sources"),". Click on ",(0,o.kt)("strong",{parentName:"li"},"Add data source")," and select ",(0,o.kt)("strong",{parentName:"li"},"Prometheus")," core plugin."),(0,o.kt)("li",{parentName:"ol"},"Fill the following fields:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"URL"),": http://localhost:9090"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Scrape interval"),": 5s"))),(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("strong",{parentName:"li"},"Save & Test"),". If you have a running Prometheus server, everything should turn green. If the URL can't be reached, try changing the ",(0,o.kt)("strong",{parentName:"li"},"Access")," field to ",(0,o.kt)("inlineCode",{parentName:"li"},"Browser"),"."),(0,o.kt)("li",{parentName:"ol"},"On the left side panel, click on ",(0,o.kt)("strong",{parentName:"li"},"Dashboards -> Manage"),"."),(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("strong",{parentName:"li"},"Import"),". Paste the content of ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/goshimmer/blob/develop/tools/monitoring/grafana/dashboards/local_dashboard.json"},"local_dashboard.json")," in the ",(0,o.kt)("strong",{parentName:"li"},"Import via panel json"),", or download the life and use the ",(0,o.kt)("strong",{parentName:"li"},"Upload .json file")," option."),(0,o.kt)("li",{parentName:"ol"},"Now you can open ",(0,o.kt)("strong",{parentName:"li"},"GoShimmer Local Metrics")," dashboard under ",(0,o.kt)("strong",{parentName:"li"},"Dashboards"),". Don't forget to start your node and run Prometheus!")))}d.isMDXComponent=!0},3905:function(e,a,t){t.d(a,{Zo:function(){return m},kt:function(){return d}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),h=p(t),d=r,c=h["".concat(s,".").concat(d)]||h[d]||u[d]||o;return t?n.createElement(c,i(i({ref:a},m),{},{components:t})):n.createElement(c,i({ref:a},m))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=h;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"}}]);