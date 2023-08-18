function match(candidate, job) {
    if (typeof job.maxSalary === 'undefined' || typeof candidate.minSalary === 'undefined') {
      throw new Error('Salary information is missing');
    }
    return job.maxSalary >= candidate.minSalary - (candidate.minSalary * 0.1);
  }