import sys, json, csv

# whitelisted urls which have no X-Frame-Options and allows for ajax calls. 
whitelist = ["www.youtube.com/embed/"]

def updateJSON(data, record_keys, data_csv, file_name, data_path):
  records = data["data"]
  for path in data_path:
    records = records[path]
  for idx, record in enumerate(data_csv):
    if idx != 0:
        try:
          for value in record:
            if "http" in value and (not any([url in value for url in whitelist])):
                raise TypeError("Only Whitelisted URLs are allowed")
          records.append(dict(zip(record_keys, [str(r) for r in record])))
        except:
          print('something went wrong on line {} of {}'.format(idx+1, file_name))
  return data


def generateStudentDataJSON(entry, exit):
  records_details = {
    "jh-student-data.csv": {
      "data_path": ["indiv", "jh"], 
      "record_keys": ["id", "name", "thumbnail_profile", "profile", "thumbnail_intro", "intro", "thumbnail_dtalk", "dtalk", "thumbnail_catalog"]
    },
    "sh-student-data.csv": {
      "data_path": ["indiv", "sh"],
      "record_keys": ["id", "name", "thumbnail_profile", "profile", "thumbnail_intro", "intro", "thumbnail_dtalk", "dtalk", "thumbnail_catalog"]
    },
    "jh-group-data.csv": {
      "data_path": ["group", "jh"],
      "record_keys": ["id", "name", "description", "thumbnail_fpp", "fpp"]
    },
    "sh-group-data.csv": {
      "data_path": ["group", "sh"],
      "record_keys": ["id", "name", "description", "thumbnail_fpp", "fpp"]
    }
  }

  data = {
    "data": {
      "indiv": {
        "jh": [],
        "sh": []
      },
      "group": {
        "jh": [],
        "sh": []
      }
    }
  }

  for file_name in records_details:
    location = entry + file_name
    data_file = open(location, 'r', encoding="utf8")
    data_csv = csv.reader(data_file, delimiter=",")
    records_detail = records_details[file_name]
    data = updateJSON(data, records_detail["record_keys"], data_csv, file_name, records_detail['data_path'])
    data_file.close()

  student_data_location = exit + "student-data.json"
  student_data_file = open(student_data_location, "w")
  student_data_json = json.dumps(data)
  student_data_file.write(student_data_json)
  student_data_file.close()


if __name__ == '__main__':
  entry = sys.argv[1]
  exit = sys.argv[2]
  generateStudentDataJSON(entry, exit)
  print('all done!')
