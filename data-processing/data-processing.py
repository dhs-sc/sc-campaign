import sys, json, csv

def updateJSON(data, record_keys, data_csv, file_name, data_group):
  for idx, record in enumerate(data_csv):
    if idx != 0:
        try:
          data["data"][data_group].append(dict(zip(record_keys, [str(r) for r in record])))
        except:
          print('something went wrong on line {} of {}'.format(idx+1, file_name))
  return data


def generateStudentDataJSON(entry, exit):
  csv_records = {
    "jh-student-data.csv": {
      "data_group": "jh",
      "record_keys": ["id", "name", "thumbnail_profile", "profile", "thumbnail_intro", "intro"]
    },
    "sh-student-data.csv": {
      "data_group": "sh",
      "record_keys": ["id", "name", "thumbnail_profile", "profile", "thumbnail_intro", "intro", "thumbnail_dtalk", "dtalk"]
    },
    "jh-group-data.csv": {
      "data_group": "group",
      "record_keys": ["id", "name", "description", "thumbnail_fpp", "fpp"]
    }
  }

  data = {
    "data": {
      "sh": [],
      "jh": [],
      "group": []
    }
  }

  for file_name in csv_records:
    location = entry + file_name
    data_file = open(location, 'r')
    data_csv = csv.reader(data_file, delimiter=",")
    csv_record = csv_records[file_name]
    data = updateJSON(data, csv_record["record_keys"], data_csv, file_name, csv_record['data_group'])
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