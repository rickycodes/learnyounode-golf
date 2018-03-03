learnyounode=./tmp/node_modules/learnyounode
bin=${learnyounode}/bin/learnyounode
counter=0

if [ ! -d "$learnyounode" ]; then
  echo learnyounode directory does not exist!
  exit 1
fi

for folder in $(ls -d */ | grep '[0-13]');
do
  ${bin} select ${counter}
  verify=$(${bin} verify ${folder}/index.js)
  echo ${verify}
  check=$(echo ${verify} | grep FAIL)
  if [ "$check" ]; then
    exit 1
  fi
  let counter=counter+1
done

echo all tests passed!
