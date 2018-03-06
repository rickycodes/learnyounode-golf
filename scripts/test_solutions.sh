l=learnyounode
path=./tmp/node_modules/${l}
bin=${path}/bin/${l}
count=0

if [ ! -d "$path" ]; then
  echo ${l} directory does not exist!
  exit 1
fi

for folder in $(ls -d */ | grep '[0-13]');
do
  ${bin} select ${count} &> /dev/null
  verify=$(${bin} verify ${folder}/index.js)
  echo -e "${verify}\n"
  check=$(echo ${verify} | grep FAIL)
  if [ "$check" ]; then
    exit 1
  fi
  let count=count+1
done

echo -e "\nall tests passed!"
